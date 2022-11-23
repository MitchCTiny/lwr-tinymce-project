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
        base_url: '/tinymce'
      });
    }
  }
}
