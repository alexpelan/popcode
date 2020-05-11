/* eslint-disable import/extensions */

import BOOTSTRAP_CSS from '../../bower_components/bootstrap/dist/css/bootstrap.min.css';
import BOOTSTRAP_JS from '../../bower_components/bootstrap/dist/js/bootstrap.min.js';
import MUSTACHE from '../../bower_components/mustache.js/mustache.js';
import JQUERY from '../../node_modules/jquery/dist/jquery.min.js';
import LODASH from '../../node_modules/lodash/lodash.min.js';
import P5 from '../../node_modules/p5/lib/p5.min.js';

export const jquery = {javascript: JQUERY};
console.log("lodash is ", LODASH) // eslint-disable-line
export const lodash = {javascript: LODASH};

export const mustache = {javascript: MUSTACHE};

export const bootstrap = {css: BOOTSTRAP_CSS, javascript: BOOTSTRAP_JS};

export const p5 = {javascript: P5};
