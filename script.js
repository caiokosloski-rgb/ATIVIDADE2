<script src="script.js"></script>







/* Área principal do jogo */
.secao-jogo {
    width: 100%;
    margin: 30px auto;
    box-sizing: border-box;
    text-align: center;
}

/* Quadro do jogo */
.quadro-jogo {
    display: block;
    position: relative;
    width: calc(100% - 32px);
    max-width: 1400px;
    aspect-ratio: 16 / 9;
    margin: 0 auto;
    padding: 0;
    background: #080808;
    overflow: hidden;
    border-radius: 14px;
    box-sizing: border-box;
}

/* O jogo preenche completamente o quadro */
.quadro-jogo iframe {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
    border: none;
    background: #000000;
}

/* Tela cheia */
#jogo-frame:fullscreen {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    max-width: none;
    border: none;
    border-radius: 0;
    background: #000000;
}

/* Botão de tela cheia */
.botao-tela-cheia {
    display: block;
    margin: 12px auto 30px;
    padding: 12px 22px;
    background: #171717;
    color: #ffffff;
    border: 1px solid #c49b45;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
}

.botao-tela-cheia:hover {
    background: #c49b45;
    color: #111111;
}

/* Link para abrir o jogo em outra aba */
.link-jogo {
    margin-top: 14px;
}

.link-jogo a {
    color: #c49b45;
    text-decoration: none;
}

.link-jogo a:hover {
    text-decoration: underline;
}