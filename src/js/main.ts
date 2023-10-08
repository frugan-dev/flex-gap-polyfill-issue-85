import * as bootstrap from 'bootstrap';

const myTooltipElement = document.querySelector('#myTooltip');
const tooltip = bootstrap.Tooltip.getOrCreateInstance(myTooltipElement);

tooltip.hide();
