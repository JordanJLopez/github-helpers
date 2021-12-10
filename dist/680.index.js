exports.id = 680;
exports.ids = [680,136];
exports.modules = {

/***/ 9042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cc": () => (/* binding */ GITHUB_OPTIONS),
/* harmony export */   "$9": () => (/* binding */ DEFAULT_PIPELINE_STATUS),
/* harmony export */   "Km": () => (/* binding */ DEFAULT_PIPELINE_DESCRIPTION),
/* harmony export */   "Hc": () => (/* binding */ PRODUCTION_ENVIRONMENT),
/* harmony export */   "mj": () => (/* binding */ DEFAULT_BRANCH),
/* harmony export */   "_d": () => (/* binding */ CORE_APPROVED_PR_LABEL),
/* harmony export */   "Xt": () => (/* binding */ PEER_APPROVED_PR_LABEL),
/* harmony export */   "Ak": () => (/* binding */ READY_FOR_MERGE_PR_LABEL),
/* harmony export */   "IH": () => (/* binding */ FIRST_QUEUED_PR_LABEL),
/* harmony export */   "nJ": () => (/* binding */ JUMP_THE_QUEUE_PR_LABEL),
/* harmony export */   "ak": () => (/* binding */ QUEUED_FOR_REVIEW),
/* harmony export */   "HW": () => (/* binding */ DEFAULT_PR_TITLE_REGEX),
/* harmony export */   "ju": () => (/* binding */ WAITING_FOR_PEER_APPROVAL),
/* harmony export */   "vt": () => (/* binding */ IN_REVIEW_COLUMN),
/* harmony export */   "wM": () => (/* binding */ READY_FOR_REVIEW_COLUMN),
/* harmony export */   "ne": () => (/* binding */ CORE_REVIEW_APPROVED_COLUMN),
/* harmony export */   "Te": () => (/* binding */ ProjectNamesByRepo)
/* harmony export */ });
/* unused harmony export DEFAULT_EXEMPT_DESCRIPTION */
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// These extra headers are for experimental operations. Newer versions of octokit may not require this
const GITHUB_OPTIONS = {
    headers: {
        accept: 'application/vnd.github.ant-man-preview+json,application/vnd.github.flash-preview+json'
    }
};
const DEFAULT_EXEMPT_DESCRIPTION = 'Passed in case the check is exempt.';
const DEFAULT_PIPELINE_STATUS = 'Pipeline Status';
const DEFAULT_PIPELINE_DESCRIPTION = 'Pipeline clear.';
const PRODUCTION_ENVIRONMENT = 'production';
const DEFAULT_BRANCH = 'main';
const CORE_APPROVED_PR_LABEL = 'CORE APPROVED';
const PEER_APPROVED_PR_LABEL = 'PEER APPROVED';
const READY_FOR_MERGE_PR_LABEL = 'READY FOR MERGE';
const FIRST_QUEUED_PR_LABEL = 'QUEUED FOR MERGE #1';
const JUMP_THE_QUEUE_PR_LABEL = 'JUMP THE QUEUE';
const QUEUED_FOR_REVIEW = 'QUEUED FOR REVIEW :pencil2:';
const DEFAULT_PR_TITLE_REGEX = '^(build|ci|chore|docs|feat|fix|perf|refactor|style|test|revert|Revert)((.*))?: .+$';
// GitHub Projects
const WAITING_FOR_PEER_APPROVAL = 'Waiting for Peer Approval';
const IN_REVIEW_COLUMN = 'Core Review In Progress';
const READY_FOR_REVIEW_COLUMN = 'Ready for Core Review QUEUE';
const CORE_REVIEW_APPROVED_COLUMN = 'Core Review Approved';
const ProjectNamesByRepo = [
    {
        'blossom-flex-ui': 'Blossom-PR-Review-Project'
    }
];


/***/ }),

/***/ 2680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moveProjectCardToInReview": () => (/* binding */ moveProjectCardToInReview)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9042);
/* harmony import */ var _move_project_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136);
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const moveProjectCardToInReview = ({ pull_number }) => __awaiter(void 0, void 0, void 0, function* () {
    const originColumn = _constants__WEBPACK_IMPORTED_MODULE_0__/* .READY_FOR_REVIEW_COLUMN */ .wM;
    const destinationColumn = _constants__WEBPACK_IMPORTED_MODULE_0__/* .IN_REVIEW_COLUMN */ .vt;
    return (0,_move_project_card__WEBPACK_IMPORTED_MODULE_1__.moveProjectCard)({ pull_number, originColumn, destinationColumn });
});


/***/ }),

/***/ 136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "moveProjectCard": () => (/* binding */ moveProjectCard)
});

// EXTERNAL MODULE: ./node_modules/@actions/core/lib/core.js
var core = __webpack_require__(2186);
// EXTERNAL MODULE: ./node_modules/@actions/github/lib/github.js
var github = __webpack_require__(5438);
// EXTERNAL MODULE: ./src/constants.ts
var constants = __webpack_require__(9042);
;// CONCATENATED MODULE: ./src/utils/get-project-name.ts
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const getProjectName = ({ repo }) => {
    const repos = constants/* ProjectNamesByRepo.find */.Te.find((item) => item[repo]);
    const [projectName] = Object.values(repos || {});
    return projectName;
};

// EXTERNAL MODULE: ./src/octokit.ts
var octokit = __webpack_require__(6161);
;// CONCATENATED MODULE: ./src/helpers/move-project-card.ts
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const moveProjectCard = ({ pull_number, destinationColumn, originColumn }) => __awaiter(void 0, void 0, void 0, function* () {
    const repositoryName = github.context.repo.repo;
    const projectName = getProjectName({ repo: repositoryName });
    return octokit/* octokit.pulls.get */.K.pulls.get(Object.assign({ pull_number }, github.context.repo))
        .then((getResponse) => {
        const pullRequest = getResponse.data;
        if (pullRequest) {
            octokit/* octokit.projects.listForRepo */.K.projects.listForRepo(Object.assign({ state: 'open', per_page: 100 }, github.context.repo))
                .then(projects => {
                const project = findProjectToModify(projects, projectName);
                if (project) {
                    octokit/* octokit.projects.listColumns */.K.projects.listColumns({
                        project_id: project.id,
                        per_page: 100
                    })
                        .then(response => {
                        const coreReviewColumn = filterDestinationColumn(response, destinationColumn);
                        const filteredColumn = getOriginColumn(response, originColumn);
                        if (filteredColumn) {
                            octokit/* octokit.projects.listCards */.K.projects.listCards({
                                column_id: filteredColumn.id
                            })
                                .then(cards => {
                                const cardToMove = getCardToMove(cards, pullRequest.issue_url);
                                if (cardToMove && coreReviewColumn) {
                                    octokit/* octokit.projects.moveCard */.K.projects.moveCard({
                                        card_id: cardToMove.id,
                                        column_id: coreReviewColumn.id,
                                        position: 'top'
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    })
        .catch(error => {
        if (error.status === 409) {
            core.info('There was an error moving the project card.');
        }
    });
});
const findProjectToModify = (projectsResponse, projectName) => projectsResponse.data.find(project => project.name === projectName);
const filterDestinationColumn = (columns, destinationColumn) => columns.data.find(column => column.name === destinationColumn);
const getOriginColumn = (columns, originColumn) => columns.data.find(column => column.name === originColumn);
const getCardToMove = (cardsResponse, issueUrl) => cardsResponse.data.find(card => card.content_url === issueUrl);


/***/ }),

/***/ 6161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ octokit)
/* harmony export */ });
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2186);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_1__);
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


const octokit = (0,_actions_github__WEBPACK_IMPORTED_MODULE_1__.getOctokit)(_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput('github_token', { required: true })).rest;


/***/ })

};
;
//# sourceMappingURL=680.index.js.map