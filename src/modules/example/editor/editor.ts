import { LightningElement } from 'lwc';
import tinymce from 'tinymce';

export default class Editor extends LightningElement {
  renderedCallback(): void {
    this.initTinymce();
  }

  initTinymce() {
    const targetEl = this.template.querySelector('.editor') as HTMLElement;

    if (targetEl) {
      console.log('Init editor');
      tinymce.init({
        target: targetEl,
        plugins: [ 'importcss' ],
        content_css: '/assets/content.css',
        importcss_append: true,
        base_url: '/tinymce'
      });
    }
  }
}
