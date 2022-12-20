import { LightningElement } from 'lwc';
import tinymce from 'tinymce';
import tinymcedev from '@tinymce-dev/tinymce';

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
        plugins: [ 'help' ],
        content_css: '/assets/content.css',
        importcss_append: true,
        base_url: '/tinymce'
      });
    }
  }
}
