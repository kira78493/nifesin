(window.beeketingWPJP=window.beeketingWPJP||[]).push([[5],{1184:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=h(o(9)),n=h(o(3)),i=h(o(74)),a=h(o(25)),l=h(o(6)),c=h(o(46)),r=h(o(15)),u=h(o(321)),d=h(o(633)),p=h(o(1186));function h(e){return e&&e.__esModule?e:{default:e}}t.default={props:{isClosePopup:Boolean,isUsingDefaultBar:{type:Boolean,default:!0}},components:{"modal-position-box":p.default},data:function(){return{selector:null,inProcessSave:!1,isConfirmSelector:!1,isShowSuccess:!1,message:"Nothing changed",choosenPage:{home:{page:"home",title:"Home page"},collection:{page:"collection",title:"Collection page"},product:{page:"product",title:"Product page"},cart:{page:"cart",title:"Cart page"}},valueChoosenPage:"home",urlChangePage:"",isCloseIntroduce:!1,isCloseSucess:!0,isShowPlacePopup:!1,choosenPositionPage:{home:"",product:"",collection:"",cart:""},selectorSavePage:!1,closeError:!0}},ready:function(){this.checkCurrentPage(),i.default.loadCSS(i.default.getAssetUrl("core/assets/styles/custom_widget_position.css")),d.default.selectPosition(),this.confirmSelector(),this.getDataSaveWhenReloadPage(),d.default.removeAdminBar()},methods:{getDataSaveWhenReloadPage:function(){var e=localStorage.getItem("set_choosen_position_page");if(e&&(this.choosenPositionPage=JSON.parse(e)),this.valueChoosenPage){d.default.applyWidgetTemplate(this.choosenPositionPage[this.valueChoosenPage],"js-bkt-default-template")}this.loopSaveSettingPage()},closePopupAction:function(e){switch(e){case"intro":this.isCloseIntroduce=!0;break;case"success":this.isCloseSucess=!0;break;case"place":if(this.isShowPlacePopup=!1,this.valueChoosenPage){(0,n.default)(".js-bkt-widget-preview").remove(),this.selector=this.choosenPositionPage[this.valueChoosenPage],d.default.applyWidgetTemplate(this.choosenPositionPage[this.valueChoosenPage],"js-bkt-default-template")}}},savePositionPageToLocal:function(){var e=this,t=localStorage.getItem("set_choosen_position_page");switch(t&&(this.choosenPositionPage=JSON.parse(t)),this.valueChoosenPage){case"home":this.choosenPositionPage.home=this.selector;break;case"collection":this.choosenPositionPage.collection=this.selector;break;case"product":this.choosenPositionPage.product=this.selector;break;case"cart":this.choosenPositionPage.cart=this.selector}this.loopSaveSettingPage(),localStorage.setItem("set_choosen_position_page",(0,s.default)(this.choosenPositionPage)),this.isShowPlacePopup=!1,this.isCloseSucess=!1,setTimeout(function(){e.isCloseSucess=!0},3e3)},loopSaveSettingPage:function(){var e=[];for(var t in this.choosenPositionPage)""!==this.choosenPositionPage[t]&&e.push(""+this.choosenPositionPage[t]);this.selectorSavePage=1<=e.length||this.selectorSavePage},cancelAction:function(){localStorage.removeItem("set_choosen_position_page"),this.choosenPositionPage={home:"",product:"",collection:"",cart:""},this.selectorSavePage=!1,this.cancelPositionSelector(!0)},changeChoosenPage:function(){var t=this,e=l.default.getParam("shop","shop").id,o=u.default.getGoApiEndpoint()+"/product/get-random-product?shop_id="+e,s=u.default.getGoApiEndpoint()+"/collection/get-random-collection?shop_id="+e;switch(this.valueChoosenPage){case"home":a.default.current().page_util.forceGoToHomePage();break;case"collection":u.default.sendRequest(s,"get",{},3e3,function(e){t.callbackPosition(e)});break;case"product":u.default.sendRequest(o,"get",{},3e3,function(e){t.callbackPosition(e)});break;case"cart":a.default.current().page_util.forceGoToCartPage()}},callbackPosition:function(e){"product"===this.valueChoosenPage&&(this.urlChangePage=r.default.redirect(e.product_url)),"collection"===this.valueChoosenPage&&(this.urlChangePage=r.default.redirect(e.collection_url))},checkCurrentPage:function(){"product"===a.default.current().currentPageContext().type&&(this.valueChoosenPage="product"),"collection"===a.default.current().currentPageContext().type&&(this.valueChoosenPage="collection"),"cart"===a.default.current().currentPageContext().type&&(this.valueChoosenPage="cart")},savePositionSelector:function(){if(d.default.removePlaceHolderTemplate(),this.selector){this.inProcessSave=!0,this.selectorSavePage=!1;var e=JSON.parse(sessionStorage.getItem("widget_choosen_position_feature"));if(this.isUsingDefaultBar)null!==window.opener&&window.opener.postMessage({placePositions:this.selector,sendBackToSave:e.pageChoosen},"*");else{var t=[];for(var o in this.choosenPositionPage)""!==this.choosenPositionPage[o]&&t.push(""+this.choosenPositionPage[o]);null!==window.opener&&window.opener.postMessage({placePositions:this.selector,sendBackToSave:e.pageChoosen},"*")}this.isShowSuccess=!0,this.isConfirmSelector=!1,this.message="Changed successfully!",this.inProcessSave&&(this.inProcessSave=!1,this.isConfirmSelector=!1,this.isShowPlacePopup=!1)}},confirmSelector:function(){var t=this,e=l.default.getParam("shop","shop").id;c.default.listen("widget_choosen_position_feature_"+e,function(){var e=d.default.getSelector();e&&(t.isShowPlacePopup=!0,t.selector=e,t.isConfirmSelector=!0,t.message="Unsaved settings",t.closeError=!0,d.default.applyWidgetTemplate(t.selector,"js-bkt-default-template"))})},cancelPositionSelector:function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];this.message="Nothing changed",this.isConfirmSelector=!1,this.isShowPlacePopup=!1,e&&d.default.cancelPositionSelected()},closeSelectMode:function(){window.opener=null;var e=window.name="";localStorage.removeItem("set_choosen_position_page"),sessionStorage.removeItem("widget_choosen_position_feature"),this.choosenPositionPage={home:"",product:"",collection:"",cart:""},r.default.redirect(e)}},watch:{isClosePopup:function(e){var t=this;e&&setTimeout(function(){t.isCloseIntroduce=!0},3e3)},selector:function(e){e&&(this.isConfirmSelector=!0,this.selectorSavePage=!0)}}}},1185:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ALLOW_CONTAINER_ELEMENT=["section","div","main"],t.NOT_ALLOW_CONTAINER_ELEMENT=["js-zoom-enabled","mousetrap","product__photo-container-product-template","main-img-link"],t.elClass={highlight:"bkt-outline-element",placeholder:"bkt-placeholder-template",widgetPreviewTemplate:"js-bkt-widget-preview"}},1186:function(e,t,o){var s,n,i={};s=o(1187),Object.keys(s).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.warn("[vue-loader] modules/core/blocks/custom_widget_position/components/modalPositionBox.vue: named exports in *.vue files are ignored."),n=o(1188),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(a.template=n),a.computed||(a.computed={}),Object.keys(i).forEach(function(e){var t=i[e];a.computed[e]=function(){return t}})},1187:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(o(3)),i=a(o(6)),n=a(o(633));function a(e){return e&&e.__esModule?e:{default:e}}t.default={props:{selectorBox:String,isCloseError:Boolean},data:function(){return{placePositionBox:"",closeConfirm:!1,getNameAppChoosen:""}},ready:function(){var t=this;(0,s.default)(document).on("click",function(e){if(t.closeConfirm){if((0,s.default)(e.target).closest(".content-box").length||(0,s.default)(e.target).closest(".choosen-box-bar .bkt-choosen").length)return;t.closeConfirm=!1,(0,s.default)("body").removeClass("bkt--disable-scroll")}}),this.getPagePosition()},methods:{linkToSupport:function(){window.open("http://support.beeketing.com/support/solutions/articles/24000010334-how-to-customize-position-of-countdown-cart-widgets-")},closePopupAction:function(e){this.closeConfirm=!1,(0,s.default)("body").removeClass("bkt--disable-scroll"),e&&(this.selectorBox=this.placePositionBox),this.checkPlacePosition()},checkPlacePosition:function(){var e=this.placePositionBox.split(","),t=null;e.forEach(function(e){(0,s.default)(e).length&&!t&&((0,s.default)(e)[0].offsetWidth||(0,s.default)(e)[0].offsetHeight)&&(t=e)});(0,s.default)(".js-bkt-widget-preview").remove(),n.default.applyWidgetTemplate(t,"js-bkt-default-template"),this.isCloseError=!!t},showModalBox:function(){this.closeConfirm=!0,(0,s.default)("body").addClass("bkt--disable-scroll"),null!==this.selectorBox&&(this.placePositionBox=this.selectorBox)},getPagePosition:function(){var e=JSON.parse(sessionStorage.getItem("widget_choosen_position_feature")),t=void 0,o=void 0,s=void 0;for(var n in"cboost"!==e.pageChoosen&&(s=parseInt(e.pageChoosen.split("_")[1],10)),i.default.getAppParam("cboost","offers"))i.default.getAppParam("cboost","offers")[n].id===s&&(t=s,o=i.default.getAppParam("cboost","offers")[n].buttonOfferSettings.position);switch(e.pageChoosen){case"countdown_timer":this.getNameAppChoosen="Countdown timer",this.placePositionBox=i.default.getAppParam("countdown_cart","countdownTimer").placePositions;break;case"stock_countdown":this.getNameAppChoosen="Stock countdown",this.placePositionBox=i.default.getAppParam("countdown_cart","stockCountdown").placePositions;break;case"social_proof":this.getNameAppChoosen="Social proof",this.placePositionBox=i.default.getAppParam("countdown_cart","socialProof").displayOptions.position_embed;break;case"currency":this.getNameAppChoosen="Currency",this.placePositionBox=i.default.getAppParam("currency","widget_position_selector");break;case"cboost":case"cboost_"+t:this.getNameAppChoosen="Checkout Boost",this.placePositionBox=o}},closeError:function(){this.isCloseError=!0}}}},1188:function(e,t,o){e.exports='\n<div class="choosen-box">\n  <div class="choosen-box-bar">\n    <p>Having troubles? Do you want to try another way to customize this position?</p>\n    <button class="bkt--btn bkt--btn-default bkt-choosen" type="button" v-on:click.prevent="showModalBox">Please click here</button>\n  </div>\n  <div class="modal-choosen-box" v-if="closeConfirm">\n    <div class="content-box">\n      <span class="close-button" type="button" v-on:click.prevent="closePopupAction()">x</span>\n      <h4>Where do you want to show {{ getNameAppChoosen }} widget on your site?</h4>\n      <div class="choosen-box-content">\n        <div class="form-group">\n          <textarea v-model="placePositionBox" cols="55" rows="3"></textarea>\n        </div>\n        <div class="link-support">\n          <a v-on:click.prevent="linkToSupport" target="_blank">Need more help?</a>\n        </div>\n        <p>* tip: we use jQuery selector to append recommendation result</p>\n        <p>** default: .product-form-product-template, #product-details, #addToCartForm,  #AddToCartForm, .product-form, #add-item-form, .clearfix.product_form</p>\n        <p class="notice-customer">NOTE:<br />\n          If the element has both ID and Class, please use ID<br />\n          Add "<span>#</span>" (hash) before the ID or "<span>.</span>" (dot) before the class before entering it in the box. For example:<br />\n          If you find only ID or Class, please add <span>#ID</span> or <span>.Class</span> to the box</p>\n        <iframe width="100%" height="345" src="https://www.youtube.com/embed/rlE8AV4cpfk?rel=0&autoplay=0" frameborder="0">\n        </iframe>\n      </div>\n      <div class="footer-choosen-box">\n        <button class="bkt--btn bkt--btn-primary bkt-confirm" type="button" v-on:click.prevent="closePopupAction(\'confirm\')">Confirm</button>\n      </div>\n    </div>\n  </div>\n  <div class="place-error"\n       transition = "fade-popup-up"\n       v-if="!isCloseError">\n    <img src="'+o(1189)+'" alt="error icon">\n    <p>Please try another ID/Class we cannot find it to place your widget!</p>\n    <button class="close-button" type="button" v-on:click.prevent="closeError">x</button>\n  </div>\n</div>\n'},1189:function(e,t,o){e.exports=o.p+"1ee0bb0a7416b509983ca5892570679a.svg"},1190:function(e,t,o){e.exports='\n<div class="bkt--body bkt-editor-settings">\n  \x3c!-- Settings bar --\x3e\n  <div v-if="isUsingDefaultBar" class="bkt-editor-settings__header">\n    <button class="bkt-editor-settings__header-close" v-on:click.prevent="closeSelectMode">\n      Turn off editing mode\n    </button>\n    <div class="bkt-editor-settings__header-actions-group">\n      <div class="bkt-editor-settings__header-message" v-if="message" v-text="message"></div>\n      <button class="bkt--btn bkt--btn-outline bkt-editor-settings__header-action-cancel" type="button" v-on:click.prevent="cancelPositionSelector" :disabled="inProcessSave">Cancel</button>\n      <button class="bkt--btn bkt--btn-primary bkt-editor-settings__header-action-save" type="button" v-on:click.prevent="savePositionSelector" :disabled="!isConfirmSelector">Save</button>\n    </div>\n  </div>\n\n\n  <div v-if="!isUsingDefaultBar" class="bkt-editor-settings__header container">\n    <div class="select-page">\n      <span>Setting widget position in</span>\n      <select v-model="valueChoosenPage" @change="changeChoosenPage" class="bkt--select">\n        <option v-for="page in choosenPage" :value="page.page">\n          {{page.title}}\n        </option>\n      </select>\n    </div>\n    <button class="bkt--btn bkt--btn-outline" v-on:click.prevent="closeSelectMode">\n      Turn off editing mode\n    </button>\n    <div class="bkt-editor-settings__header-actions-group" :class="{\'btn-move-custom\': !isUsingDefaultBar}">\n      <div class="bkt-editor-settings__header-message"></div>\n      <div class="bkt-editor-settings__header-message" v-if="message" v-text="message"></div>\n      <button class="bkt--btn bkt--btn-outline bkt-editor-settings__header-action-cancel" type="button" v-on:click.prevent="cancelAction" :disabled="inProcessSave">Cancel</button>\n      <button class="bkt--btn bkt--btn-primary bkt-editor-settings__header-action-save" type="button" v-on:click.prevent="savePositionSelector" :disabled="!selectorSavePage || !selector">Save all settings</button>\n    </div>\n  </div>\n\n  \x3c!-- Popup --\x3e\n  <div class="bkt-editor-settings__dialog" v-if="!isClosePopup">\n    <slot name="popup"></slot>\n  </div>\n\n  \x3c!-- Template preview --\x3e\n  <div id="js-bkt-widget-preview" class="bkt-editor-settings__preview">\n    <div id="js-bkt-default-template">\n      <div class="bkt-editor-settings__position-success">\n        <span class="bkt-editor-settings__position-success-plus"></span>\n      </div>\n    </div>\n  </div>\n\n  \x3c!-- Using Custom Bar and flow for currency --\x3e\n  <div v-if="!isUsingDefaultBar" class="popup-place">\n    <div class="bkt-editor-settings__dialog" v-if="isShowPlacePopup">\n      <div class="popup-show">\n        <span class="close-button" type="button" v-on:click.prevent="closePopupAction(\'place\')">x</span>\n        <img src="'+o(1191)+'" alt="success place">\n        <button class="bkt--btn bkt--btn-outline bkt-editor-settings__header-action-cancel" type="button" v-on:click.prevent="closePopupAction(\'place\')" :disabled="inProcessSave">Cancel</button>\n        <button class="bkt--btn bkt--btn-primary bkt-editor-settings__header-action-save" type="button" v-on:click.prevent="savePositionPageToLocal" :disabled="!isConfirmSelector">Place here</button>\n      </div>\n    </div>\n    <div class="choosen-noti"\n         transition = "fade-popup"\n         v-if="isClosePopup && !isCloseIntroduce">\n      <p>Please choose the position you want to<br/>place the widget</p>\n      <button class="close-button" type="button" v-on:click.prevent="closePopupAction(\'intro\')">x</button>\n    </div>\n    <div class="place-success"\n         transition = "fade-popup-up"\n         v-if="!isCloseSucess">\n      <img src="'+o(1192)+'" alt="success icon">\n      <p>Changed successfully!</p>\n      <button class="close-button" type="button" v-on:click.prevent="closePopupAction(\'success\')">x</button>\n    </div>\n  </div>\n\n  \x3c!-- Modal when user cannot find any position --\x3e\n  <modal-position-box :selector-box.sync="selector" :is-close-error.sync="closeError"></modal-position-box>\n</div>\n'},1191:function(e,t,o){e.exports=o.p+"ab4a17ae200ce075da51e6264ce39c54.png"},1192:function(e,t,o){e.exports=o.p+"d3fcee0ccba803cc0c8f3deef9a66c09.png"},302:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(o(51)),a=n(o(3)),l=n(o(45)),c=n(o(4));function n(e){return e&&e.__esModule?e:{default:e}}var i={instances:{},generateId:function(){for(var e=void 0;e=parseInt(""+(0,s.default)(1e3,9999)+(new Date).getTime(),10),void 0!==this.instances[e];);return e},get:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o="vue-instance",s=(0,a.default)(e),n=s.data(o);if(!n||void 0===this.instances[n]){n=this.generateId(),(0,c.default)("Starting instance "+n);var i=void 0;i=t||new l.default,this.instances[n]=i,e&&e[0]&&void 0!==e[0]&&this.instances[n].$mount().$appendTo(e[0]),s.data(o,n)}return this.instances[n]}};t.default=i},632:function(e,t,o){var s,n,i={};s=o(1184),Object.keys(s).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.warn("[vue-loader] modules/core/blocks/custom_widget_position/components/position.vue: named exports in *.vue files are ignored."),n=o(1190),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(a.template=n),a.computed||(a.computed={}),Object.keys(i).forEach(function(e){var t=i[e];a.computed[e]=function(){return t}})},633:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=s(o(3)),r=s(o(10)),a=s(o(6)),l=s(o(46)),u=o(1185);function s(e){return e&&e.__esModule?e:{default:e}}var d={getSelector:function(){var e=(0,c.default)("."+u.elClass.highlight);if(!e.length)return!1;var t=this.getPositionSelector(e);return t||!1},selectPosition:function(){var i=this;(0,c.default)(function(){var o=(0,c.default)("body"),s="."+u.elClass.placeholder,n="."+u.elClass.highlight;o.on("mouseover",function(e){if(!a.default.getParam("inProcessSavePosition")){var t=i.getTargetElement(e);if(t.length&&!t.hasClass(u.elClass.placeholder)&&!t.closest("div, form").hasClass(u.elClass.highlight)){var o=i.getPositionSelector(t);if(!(0,c.default)(o).hasClass(u.elClass.highlight)){(0,c.default)(n).removeClass(u.elClass.highlight);for(var s=0;s<u.NOT_ALLOW_CONTAINER_ELEMENT.length;s++)if((0,c.default)(o).hasClass(u.NOT_ALLOW_CONTAINER_ELEMENT[s])){(0,c.default)(o).parent().addClass(u.elClass.highlight);break}(0,c.default)(o).addClass(u.elClass.highlight),d.removePlaceHolderTemplate(),(0,c.default)(o).append(""+i.getPlaceholderTemplate())}}}}).on("mouseout",function(e){var t=(0,c.default)(n);o.find("."+u.elClass.widgetPreviewTemplate).length||(0,c.default)(e.target).find(s).length||t.attr("class")===u.elClass.placeholder||t.length&&(t.removeClass(u.elClass.highlight),t.find(s).remove())}).on("mouseover",".beeketing-page-block, ."+u.elClass.widgetPreviewTemplate,function(e){e.stopPropagation()}).on("mouseout",n,function(e){e.stopPropagation()}),o.on("click",s,function(e){if(e.preventDefault(),(0,c.default)(this).closest(n).length){(0,c.default)("."+u.elClass.widgetPreviewTemplate).remove(),d.removePlaceHolderTemplate();var t=a.default.getParam("shop","shop").id;l.default.trigger("widget_choosen_position_feature_"+t)}}),o.on("click","."+u.elClass.widgetPreviewTemplate,function(e){e.preventDefault()}),d.removeAdminBar()})},cancelPositionSelected:function(){(0,c.default)("."+u.elClass.widgetPreviewTemplate).remove()},getTargetElement:function(e){var t=e.target.nodeName.toLowerCase(),o=(0,c.default)(e.target);return-1===u.ALLOW_CONTAINER_ELEMENT.indexOf(t)&&(o=(0,c.default)(o).closest("div, form")),o},getPositionSelector:function(e){var t=this.getIdSelector(e);if(t)return t;var o=[this.getClassSelector(e)],s="",n=e,i=void 0,a=void 0;do{if(s=o.reverse().join(" "),a=(0,r.default)(s)||1!==(0,c.default)(s).length){if(3<o.length)return!1;if(!(n=n.parent()).length)return!1;var l=this.getIdSelector(n);if(l)return l;(i=this.getClassSelector(n))&&o.push(i)}}while(a);return s},getClassSelector:function(e){var t=e.attr("class");return void 0===t?"":(t=t.replace(/\s\s+/g," ").replace(""+u.elClass.highlight,"").split(" ").filter(function(e){return!(0,r.default)(e)})).length?("."+t.join(".")).replace(/.(\d+[A-Za-z_-]+|[A-Za-z_-]+\d+)[A-Za-z-_\d]*/g,""):""},getIdSelector:function(e){var t=e.attr("id");return void 0!==t&&/[^\s]/.test(t)?("#"+e.attr("id")).replace(/.(\d+[A-Za-z_-]+|[A-Za-z_-]+\d+)[A-Za-z-_\d]*/g,""):""},getPlaceholderTemplate:function(){return'<div class="'+u.elClass.placeholder+" "+this.getAppChoosen()+'"><span class="bkt-placeholder-plus"></span></div>'},applyWidgetTemplate:function(e,t){var o='<div class="'+u.elClass.widgetPreviewTemplate+" "+this.getAppChoosen()+'">'+(0,c.default)("#"+t).html()+"</div>";(0,c.default)("body").find("."+u.elClass.placeholder).remove(),(0,c.default)(e).append(o)},removePlaceHolderTemplate:function(){(0,c.default)("."+u.elClass.placeholder).remove()},removeAdminBar:function(){(0,c.default)("#admin_bar_iframe, #wpadminbar").remove()},getAppChoosen:function(){var e=JSON.parse(sessionStorage.getItem("widget_choosen_position_feature"));return e&&e.pageChoosen?e.pageChoosen:""}};t.default=d}}]);