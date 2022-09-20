import { RouterCtrl } from '@web3modal/core'
import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BACK_ICON } from '../../utils/Svgs'
import { global } from '../../utils/Theme'
import ThemedElement from '../../utils/ThemedElement'
import '../w3m-spinner'
import '../w3m-text'
import styles, { dynamicStyles } from './styles'

@customElement('w3m-modal-header')
export class W3mModalHeader extends ThemedElement {
  public static styles = [global, styles]

  // -- state & properties ------------------------------------------- //
  @property() public title = 'No Title'

  // -- private ------------------------------------------------------ //
  private backBtntemplate() {
    return html`<button class="w3m-back-btn" @click=${RouterCtrl.goBack}>${BACK_ICON}</button>`
  }

  // -- render ------------------------------------------------------- //
  protected render() {
    const backBtn = RouterCtrl.state.history.length > 1

    return html`
      ${dynamicStyles()}

      <div class="w3m-modal-header">
        ${backBtn ? this.backBtntemplate() : null}
        <w3m-text variant="large-bold">${this.title}</w3m-text>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-modal-header': W3mModalHeader
  }
}
