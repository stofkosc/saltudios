document.addEventListener('DOMContentLoaded', () => {
    fetch('/data/tempnews.json')
      .then(response => response.json())
      .then(data => {
        // Call a function to process the data and create the blocks
        createBlocks(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });

function createBlocks(items) {
    const container = document.getElementById('data-container');

    if (container) { // Check if the container element exists
        items.forEach(item => {
            // Create the wrapper div
            const wrapperDiv = document.createElement('div');
            wrapperDiv.classList.add('FRAME_news_wrapper');
        
            // Create the news block as before
            const newsBlock = document.createElement('div');
            newsBlock.classList.add('FRAME_news_block');
        
            const header = document.createElement('div');
            header.classList.add('FRAME_news_block_header');
        
            const tagsContainer = document.createElement('div');
            tagsContainer.classList.add('FRAME_news_block_tags');
        
            item.tags.forEach(tagText => {
              const tagDiv = document.createElement('div');
              tagDiv.classList.add('tag');
              tagDiv.textContent = tagText;
              tagsContainer.appendChild(tagDiv);
            });
        
            const dateTag = document.createElement('div');
            dateTag.classList.add('tag', 'tag-grey');
            dateTag.textContent = item.date;
            tagsContainer.appendChild(dateTag);
        
            header.appendChild(tagsContainer);
        
            const whatsUpDiv = document.createElement('div');
            whatsUpDiv.classList.add('size-20', 'grey', 'playfair', 'semibold');
            whatsUpDiv.textContent = "What's Up!"; // This text is static
            header.appendChild(whatsUpDiv);
        
            newsBlock.appendChild(header);
        
            const titleHeading = document.createElement('h3');
            titleHeading.classList.add('size-48', 'playfair', 'dark-grey', 'medium', 'italic');
            titleHeading.textContent = item.title;
            newsBlock.appendChild(titleHeading);
        
            const textParagraph = document.createElement('p');
            textParagraph.classList.add('size-24', 'text_news');
            textParagraph.textContent = item.text;
            newsBlock.appendChild(textParagraph);
        
            const linkHeader = document.createElement('div');
            linkHeader.classList.add('FRAME_news_block_header');
        
            const linkAnchor = document.createElement('a');
            linkAnchor.setAttribute('target', '_blank');
            linkAnchor.classList.add('LINK_medium');
            linkAnchor.href = item.linkUrl; // Set the link URL from the JSON data
            linkAnchor.textContent = 'More';
        
            const arrowSpan = document.createElement('span');
            arrowSpan.classList.add('material-symbols-outlined', 'size-48-weight-100');
            arrowSpan.style.fontSize = '30px';
            arrowSpan.textContent = 'arrow_outward';
        
            linkAnchor.appendChild(arrowSpan);
            linkHeader.appendChild(linkAnchor);
            newsBlock.appendChild(linkHeader);
        
            // Append the news block to the wrapper div
            wrapperDiv.appendChild(newsBlock);
        
            // Append the wrapper div to the main container
            container.appendChild(wrapperDiv);
        });
    } else {
        console.error('Target container element not found in the DOM.');
    }
}