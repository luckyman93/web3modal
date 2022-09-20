import { css, html } from 'lit'
import { color } from '../../utils/Theme'

export default css`
  .w3m-modal-toast {
    height: 36px;
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    border-radius: 36px;
    position: absolute;
    bottom: 60px;
    box-shadow: 0px 6px 14px -6px rgba(10, 16, 31, 0.3), 0px 10px 32px -4px rgba(10, 16, 31, 0.15);
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }

  .w3m-modal-toast svg {
    margin-right: 5px;
  }
`

export function dynamicStyles() {
  const { background, foreground } = color()

  return html`<style>
    .w3m-modal-toast {
      background-color: ${background[1]};
    }

    .w3m-modal-toast path {
      fill: ${foreground.accent};
    }
  </style>`
}
