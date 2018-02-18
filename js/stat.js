'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var GAP_BAR = 50;
var BAR_HEIGHT = -150;
var BAR_WIDTH = 40;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_HLIST = 30;
var GAP_WLIST = 20;
var BEETWEEN_TEXT = 20;
var BEETWEEN_BARTEXT = 10;
var HEIGHT_TEXT = 80;
var WIDTH_TEXT = 40;
var WIDTH_GAPTEXT = 50;
var ALL_BAR = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT, color);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_WLIST + GAP, CLOUD_Y + GAP_HLIST);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_WLIST + GAP, CLOUD_Y + GAP_HLIST + BEETWEEN_TEXT);


  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,  ' + getRandomValue(0.1, 1) + ')';
    }
    ctx.fillText(names[i], CLOUD_X + WIDTH_GAPTEXT + (WIDTH_GAPTEXT + WIDTH_TEXT) * i, ALL_BAR + CLOUD_Y + HEIGHT_TEXT + BEETWEEN_BARTEXT + GAP);
    ctx.fillRect(CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i, CLOUD_Y + HEIGHT_TEXT + ALL_BAR, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
