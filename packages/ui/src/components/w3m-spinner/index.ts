import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { color } from '../../utils/Theme'
import styles from './styles'

@customElement('w3m-spinner')
export class W3mSpinner extends LitElement {
  public static styles = styles

  // -- state & properties ------------------------------------------- //
  @property({ type: Number }) public size?: number = 24
  @property() public color?: string = color().foreground.accent

  // -- render ------------------------------------------------------- //
  protected render() {
    return html`
      <svg viewBox="0 0 50 50" width=${this.size} height=${this.size}>
        <circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke=${this.color} />
      </svg>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-spinner': W3mSpinner
  }
}
