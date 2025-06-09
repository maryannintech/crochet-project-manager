export function renderAboutSection() {
  let aboutHTML = `
     <img class="about-image" src="images/about-section-picture.jpg" />
        <p class="about-text">
          <span class="about-text-span">my crochet project manager</span> is a simple website to keep track of your crochet projects. Add
          project names, due dates, notes, and mark if they’re planned or
          ongoing. It also has a useful stitch counter, use the buttons or
          keyboard arrows to adjust. Your projects are saved using your device's local storage, so you won't lose them when you refresh or close the page.<br><br>
          I made this because I crochet too and wanted an easy way to stay organized.
        </p>
    `;
  return aboutHTML;
}
