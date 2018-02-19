'use strict';


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function getRandomIndex(Number) {
  return Number[Math.floor(Math.random() * Number.length)];
}

function renderWizard(wizards) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;
  return wizardElement;
}

var wizards = [];

var createWizzards = function (wizardCount) {
  var WIZARD_NAMES = ['ИванХуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'НионгоИрвинг'];
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  for (var j = 0; j <= wizardCount - 1; j++) {
    wizards.push({name: getRandomIndex(WIZARD_NAMES) + ' ' + getRandomIndex(WIZARD_SURNAMES), coatColor: getRandomIndex(COAT_COLOR), eyesColor: getRandomIndex(EYES_COLOR)});
  }
};
createWizzards(4);

function getRenderWizard() {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }
  similarListElement.appendChild(fragment);
}
getRenderWizard();

document.querySelector('.setup-similar').classList.remove('hidden');
