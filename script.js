<script src="script.js"></script>

ctx.fillStyle = '#FF4444';
ctx.font = 'bold 46px sans-serif';
ctx.textAlign = 'center';
ctx.fillText('FIM DE JOGO!', canvas.width / 2, canvas.height / 2 - 20);
ctx.fillStyle = '#FFFFFF';
ctx.font = '24px sans-serif';
ctx.fillText(Você fez ${score} pontos., canvas.width / 2, canvas.height / 2 + 20);
ctx.fillStyle = '#00A8E8';
ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 + 50, 200, 45);
ctx.fillStyle = '#FFFFFF';
ctx.font = '18px sans-serif';
ctx.fillText('VOLTAR AO MENU', canvas.width / 2, canvas.height / 2 + 78);
}
}
// Loop Principal do Jogo (Garante execução suave a 60 FPS)
function gameLoop() {
update();
draw();
requestAnimationFrame(gameLoop);
}
// Inicia o sistema de geração de itens e o loop principal
spawnItem();
gameLoop();