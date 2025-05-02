#!/bin/bash
set -e  # Exit on error

output_file="project_codes.md"
start_time=$(date +%s)
file_count=0

# Check directory exists
if [ ! -d "./src" ] && [ ! -d "./app" ] && [ ! -d "./pages" ]; then
    echo "Error: No Next.js project directories found (src, app, or pages)"
    exit 1
fi

# Check write permissions
if [ ! -w "$(dirname "$output_file")" ]; then
    echo "Error: No write permission in output directory"
    exit 1
fi

# Add XML structure opening tags
echo "<documents><document index=\"1\">" > "$output_file"
echo "<source>project_codes.md</source>" >> "$output_file"
echo "<document_content><documents>" >> "$output_file"

doc_index=1

# Function to process files
process_file() {
    local file=$1
    # Normalize path to remove double slashes
    file=$(echo "$file" | sed 's/\/\//\//g')
    
    # Start document tags for each file
    echo "<document index=\"$doc_index\">" >> "$output_file"
    echo "<source>${file#./}</source>" >> "$output_file"
    echo "<document_content>" >> "$output_file"
    
    # Process and escape content
    content=$(sed -E '/^[[:space:]]*import/d; /^[[:space:]]*export/d; /^[[:space:]]*\/\//d; /\/\*/,/\*\//d; /^[[:space:]]*$/d' "$file" | \
          sed 's/&/\&amp;/g')
    
    echo "$content" >> "$output_file"
    
    # Close document tags for each file
    echo "</document_content>" >> "$output_file"
    echo "</document>" >> "$output_file"
    
    file_count=$((file_count + 1))
    doc_index=$((doc_index + 1))
}

# Find and process all relevant Next.js files
find ./src ./app ./pages ./components -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) 2>/dev/null | while read -r file; do
    process_file "$file"
done

# Add XML structure closing tags
echo "</documents></document_content>" >> "$output_file"
echo "</document></documents>" >> "$output_file"

end_time=$(date +%s)
echo "Processing complete. Processed $file_count files in $((end_time-start_time)) seconds"
echo "Output saved to $output_file"