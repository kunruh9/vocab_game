import json
import re

def clean_text(text):
    # Remove part of speech markers that sometimes appear in the wrong place
    text = re.sub(r'\s+\((n\.|adj\.|v\.)\)', '', text)
    # Remove stray single letters that appear
    text = re.sub(r'\s+[A-Z]\s*$', '', text)
    return text.strip()

def extract_example(text):
    # Find the last parenthetical expression that looks like an example
    matches = list(re.finditer(r'\(([^()]+)\)', text))
    if matches:
        last_match = matches[-1]
        example = last_match.group(1).strip()
        # Check if this looks like an example (has a complete sentence)
        if any(example.endswith(x) for x in ['.', '!', '?']) and len(example.split()) > 3:
            # Return the example and the text without the example
            return (
                text[:last_match.start()].strip(),
                example
            )
    return text.strip(), ""

def parse_vocabulary_file(filename):
    words = []
    current_word = None
    current_text = None
    
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    for line in lines:
        line = line.strip()
        if not line or line.isdigit() or line == 'SAT Vocabulary':
            continue
            
        # Check if this line starts a new word entry
        word_match = re.match(r'^([a-zA-Z]+)\s+\((n\.|adj\.|v\.)\)', line)
        if word_match:
            # Process previous word if exists
            if current_word and current_text:
                current_text = clean_text(current_text)
                definition, example = extract_example(current_text)
                words.append({
                    'word': current_word,
                    'definition': definition,
                    'example': example
                })
            
            # Start new word
            current_word = word_match.group(1)
            current_text = line[line.find(')')+1:].strip()
        elif current_word:
            # Append this line to current text
            current_text = (current_text + ' ' + line).strip() if current_text else line.strip()
    
    # Process the last word
    if current_word and current_text:
        current_text = clean_text(current_text)
        definition, example = extract_example(current_text)
        words.append({
            'word': current_word,
            'definition': definition,
            'example': example
        })
    
    return words

def main():
    # Parse the vocabulary file
    words = parse_vocabulary_file('SAT Vocabulary.txt')
    
    # Save to JSON file
    with open('vocabulary.json', 'w', encoding='utf-8') as f:
        json.dump(words, f, indent=2, ensure_ascii=False)
    
    print(f"Successfully parsed {len(words)} words")

if __name__ == '__main__':
    main() 