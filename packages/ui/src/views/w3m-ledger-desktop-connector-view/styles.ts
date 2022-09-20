import { css } from 'lit'

export default css`
  .w3m-ledger-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 1 / 1.25;
    flex-direction: column;
  }

  .w3m-connecting-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }

  w3m-spinner {
    margin-right: 10px;
  }

  w3m-wallet-image {
    border-radius: 22px;
    width: 25%;
    aspect-ratio: 1 / 1;
    margin-bottom: 20px;
  }

  .w3m-install-actions {
    display: flex;
    margin-top: 20px;
  }

  .w3m-install-actions w3m-button {
    margin: 5px;
    opacity: 1;
  }
`
