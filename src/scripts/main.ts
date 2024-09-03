const pageTitle: string = "Welcome to Debo's Project!";
const pageContent: string = "This content is generated using TypeScript.";

document.addEventListener('DOMContentLoaded', () => {
    try {
        document.getElementById('title')!.textContent = pageTitle;
        document.getElementById('content')!.textContent = pageContent;
    } catch (error) {
        console.error('Error loading content:', error);
        document.getElementById('title')!.textContent = 'Error Loading Content';
        document.getElementById('content')!.textContent = 'There was an error loading the content. Please check the console for details.';
    }
});
