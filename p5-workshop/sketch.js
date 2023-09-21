let player;
let speed = 5;
let obstacles = [];
let gravity = 0.5;
let jumpStrength = -10;

function setup() {
  createCanvas(400, 400);
  player = {
    x: 50,
    y: height - 50,
    size: 40,
    velocityY: 0
  };
}

function draw() {
  background(220);

  // Movimentação do jogador
  player.velocityY += gravity;
  player.y += player.velocityY;

  if (player.y > height - player.size) {
    player.y = height - player.size;
    player.velocityY = 0;
  }

  rect(player.x, player.y, player.size, player.size);

  // Obstáculos
  if (random() < 0.02) {
    obstacles.push({
      x: width,
      y: height - 40,
      w: 40,
      h: 40
    });
  }

  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].x -= speed;
    rect(obstacles[i].x, obstacles[i].y, obstacles[i].w, obstacles[i].h);
    if (obstacles[i].x + obstacles[i].w < 0) {
      obstacles.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (key == ' ' && player.y === height - player.size) {
    player.velocityY += jumpStrength;
  }
}


let player;
let speed = 5;

function setup() {
  createCanvas(400, 400);
  player = {
    x: width / 2,
    y: height - 50,
    size: 40
  };
}

function draw() {
  background(220);

  if (keyIsDown(LEFT_ARROW)) player.x -= speed;
  if (keyIsDown(RIGHT_ARROW)) player.x += speed;

  rect(player.x, player.y, player.size, player.size);
}

bola com elasticidade
let ball;
let gravity = 0.5;
let elasticity = 0.75;

function setup() {
  createCanvas(400, 400);
  ball = {
    x: width / 2,
    y: 100,
    size: 40,
    velocityY: 0
  };
}

function draw() {
  background(220);

  ball.velocityY += gravity;
  ball.y += ball.velocityY;

  if (ball.y >= height - ball.size / 2) {
    ball.y = height - ball.size / 2;
    ball.velocityY *= -elasticity;
  }

  ellipse(ball.x, ball.y, ball.size);
}





paralax
let bg1X = 0;
let bg2X = 400;
let speed = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  imageMode(CORNER);
  rect(bg1X, 0, 400, 400);
  rect(bg2X, 0, 400, 400);

  bg1X -= speed;
  bg2X -= speed;

  if (bg1X <= -400) {
    bg1X = 400;
  }

  if (bg2X <= -400) {
    bg2X = 400;
  }
}

Pulo e gravidade
let player;
let gravity = 0.5;
let jumpStrength = -10;

function setup() {
  createCanvas(400, 400);
  player = {
    x: 50,
    y: height - 50,
    size: 40,
    velocityY: 0
  };
}

function draw() {
  background(220);

  // Gravidade
  player.velocityY += gravity;
  player.y += player.velocityY;

  // Chão
  if (player.y > height - player.size) {
    player.y = height - player.size;
    player.velocityY = 0;
  }

  rect(player.x, player.y, player.size, player.size);
}

function keyPressed() {
  if (key == ' ' && player.y === height - player.size) {
    player.velocityY += jumpStrength;
  }
}

gravidade básico
let ball;
let gravity = 0.5;
let elasticity = 0.75;

function setup() {
  createCanvas(400, 400);
  ball = {
    x: width / 2,
    y: 100,
    size: 40,
    velocityY: 0
  };
}

function draw() {
  background(220);

  ball.velocityY += gravity;
  ball.y += ball.velocityY;

  if (ball.y >= height - ball.size / 2) {
    ball.y = height - ball.size / 2;
    ball.velocityY *= -elasticity;
  }

  ellipse(ball.x, ball.y, ball.size);
}

bullets básico
let bullets = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Atualizar e desenhar balas
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].x += bullets[i].speed;
    ellipse(bullets[i].x, bullets[i].y, 10);
    if (bullets[i].x > width) {
      bullets.splice(i, 1);
    }
  }
}

function mousePressed() {
  bullets.push({ x: 0, y: mouseY, speed: 5 });
}


let player;
let gravity = 0.5;
let jumpStrength = -10;

function setup() {
  createCanvas(400, 400);
  player = {
    x: width / 2,
    y: height - 50,
    vy: 0,  // velocidade vertical
    size: 30
  };
}

function draw() {
  background(220);

  // Aplicar gravidade ao jogador
  player.vy += gravity;
  player.y += player.vy;

  // Impedir que o jogador passe pelo chão
  if (player.y > height - player.size / 2) {
    player.y = height - player.size / 2;
    player.vy = 0;  // Resetar velocidade vertical
  }

  // Desenhar o jogador
  fill(150, 50, 50);
  ellipse(player.x, player.y, player.size);
}

function mousePressed() {
  jump();
}

function keyPressed() {
  if (key === ' ' || keyCode === UP_ARROW) {
    jump();
  }
  return false;  // Prevenir qualquer comportamento padrão
}

function jump() {
  if (player.y === height - player.size / 2) {  // Verificar se o jogador está no chão
    player.vy = jumpStrength;
  }
}


seeds game 0.1

let seeds = [];
let bgColor = "#A8E6CF";
let seedColor = "#DCEDC2";
let matureSeedColor = "#FFD3B5";
let waterColor = "#FFAAA6";

function setup() {
  createCanvas(800, 600);
  background(bgColor);

  // Iniciar com uma semente mágica no centro
  seeds.push({
    x: width / 2,
    y: height / 2,
    timer: 100,
    radius: 20
  });
}

function draw() {
  background(bgColor);

  // Atualizar e desenhar sementes
  for (let i = seeds.length - 1; i >= 0; i--) {
    let seed = seeds[i];

    // Decrementar o temporizador
    seed.timer--;

    // Se o temporizador acabar, a semente está pronta para ser dividida
    if (seed.timer <= 0) {
      fill(matureSeedColor); // madura
    } else {
      fill(seedColor); // imatura
    }
    ellipse(seed.x, seed.y, seed.radius * 2);
  }
}

function mousePressed() {
  for (let i = seeds.length - 1; i >= 0; i--) {
    let seed = seeds[i];
    if (dist(mouseX, mouseY, seed.x, seed.y) < seed.radius && seed.timer <= 0) {
      // Duplicar semente
      let angle = random(TWO_PI);
      seeds.push({
        x: seed.x + cos(angle) * seed.radius * 2,
        y: seed.y + sin(angle) * seed.radius * 2,
        timer: 100,
        radius: 20
      });
      seed.timer = 100; // Redefinir o temporizador da semente original

      // Fusão de sementes
      for (let j = seeds.length - 1; j >= 0; j--) {
        if (i !== j && dist(seed.x, seed.y, seeds[j].x, seeds[j].y) < seed.radius * 2) {
          seed.radius += 5;  // A semente aumenta de tamanho ao fundir
          seeds.splice(j, 1);  // Remover a semente com a qual fundiu
        }
      }
    }
  }
}