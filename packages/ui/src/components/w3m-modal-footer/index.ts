import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { global } from '../../utils/Theme'
import styles, { dynamicStyles } from './styles'

@customElement('w3m-modal-footer')
export class W3mModalFooter extends LitElement {
  public static styles = [global, styles]

  // -- render ------------------------------------------------------- //
  protected render() {
    return html`
      ${dynamicStyles()}

      <div class="w3m-modal-footer">
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-modal-footer': W3mModalFooter
  }
}
