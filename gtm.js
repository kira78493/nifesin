
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"40",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__j",
      "vtp_name":"tvc_td.tvc_tid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"user_transaction_ids"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",2],8,16],")return\/(,|^)",["escape",["macro",2],9],"\/.test(",["escape",["macro",3],8,16],")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var b=\"\";if(",["escape",["macro",2],8,16],"){var a=new Date;a.setTime(a.getTime()+63072E6);a=\"expires\\x3d\"+a.toUTCString();",["escape",["macro",3],8,16],"\u0026\u0026(b=",["escape",["macro",3],8,16],"+\",\");document.cookie=\"user_transaction_ids\\x3d\"+b+",["escape",["macro",2],8,16],"+\"; \"+a+\"; path\\x3d\/\"}}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__v",
      "vtp_name":"test",
      "vtp_defaultValue":"jigar",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    }],
  "tags":[{
      "function":"__html",
      "priority":4,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction t_empty(a){if(\"undefined\"===typeof a||null===a)return!0;if(\"undefined\"!=typeof a.length)return 0==a.length;var b=0,c;for(c in a)a.hasOwnProperty(c)\u0026\u0026b++;return 0==b}function t_getCookie(a){var b,c=document.cookie.split(\";\");for(b=0;b\u003Cc.length;b++){var d=c[b].substr(0,c[b].indexOf(\"\\x3d\"));var e=c[b].substr(c[b].indexOf(\"\\x3d\")+1);d=d.replace(\/^\\s+|\\s+$\/g,\"\");if(d==a)return unescape(e)}return null}\nfunction t_setCookie(a,b){exdays=1;var c=new Date;c.setDate(c.getDate()+exdays);b=escape(b)+(null==exdays?\"\":\"; expires\\x3d\"+c.toUTCString());document.cookie=a+\"\\x3d\"+b+\"; Path\\x3d \/;\"}function t_setCookieSession(a,b){b=escape(b);document.cookie=a+\"\\x3d\"+b+\"; Path\\x3d \/;\"}function t_ie_trim(a){return a=a.replace(\/^\\s+|\\s+$\/g,\"\")}\nfunction t_common_dia_metric(){var a=(new Date).getDay();t_weekslot=0===a||6===a?\"WeekEnd\":\"WeekDay\";a=(new Date).getHours();ga(\"set\",\"dimension7\",t_weekslot);ga(\"set\",\"dimension8\",a);t_ppview=t_getCookie(\"ppviewtimer\");t_empty(t_ppview)\u0026\u0026(start=new Date,t_setCookie(\"ppviewtimer\",start))}t_common_dia_metric();\"undefined\"!==typeof t_hmpgImprFP_call\u0026\u0026!0===t_hmpgImprFP_call\u0026\u0026\"undefined\"===typeof t_hmpgImprFP_called\u0026\u0026(t_setCookie(\"t_listname\",\"Home Page\"),hmpg_impressions_FP());\n\"undefined\"!==typeof t_hmpgImprRP_call\u0026\u0026!0===t_hmpgImprRP_call\u0026\u0026\"undefined\"===typeof t_hmpgImprRP_called\u0026\u0026hmpg_impressions_RP();function hmpg_impressions_FP(){0!==tvc_fp.length\u0026\u0026(t_products_impressions(tvc_fp,\"fp\",\"Featured Products\"),t_hmpgImprFP_called={})}\"undefined\"!==typeof t_srchpImpr_called\u0026\u0026!0===t_srchpImpr_called\u0026\u0026\"undefined\"===typeof t_srchpImpr_called\u0026\u0026t_products_impressions(tvc_pgc,\"srch\",\"Search Results\");\nfunction hmpg_impressions_RP(){0!==tvc_rcp.length\u0026\u0026(t_products_impressions(tvc_rcp,\"rp\",\"Recent Products\"),t_hmpgImprRP_called={})}\"undefined\"!==typeof t_ppImprRDP_call\u0026\u0026!0===t_ppImprRDP_call\u0026\u0026\"undefined\"===typeof t_ppImprRDP_called\u0026\u0026(jQuery(\"a\").bind(\"click\",function(){ga(\"set\",\"metric2\",\"1\");ga(\"send\",\"event\")}),t_products_impressions(tvc_rdp,\"rdp\",\"Related Products\"));\n\"undefined\"!==typeof t_cpImpr_call\u0026\u0026!0===t_cpImpr_call\u0026\u0026\"undefined\"===typeof t_cpImpr_called\u0026\u0026(jQuery(\"a\").bind(\"click\",function(){ga(\"set\",\"metric1\",\"1\");ga(\"send\",\"event\")}),t_products_impressions(tvc_pgc,\"cp\",\"Category Page\"));\"undefined\"!==typeof t_spImpr_call\u0026\u0026!0===t_spImpr_call\u0026\u0026\"undefined\"===typeof t_spImpr_called\u0026\u0026t_products_impressions(tvc_pgc,\"sp\",\"Shop Page\");\nfunction t_products_impressions(a,b,c){t_ppImprRDP_called={};t_cpImpr_called={};t_spImpr_called={};t_srchpImpr_called={};t_prod_pos=t_send_threshold=0;t_json_length=Object.keys(a).length;for(var d in a)t_send_threshold++,t_prod_pos++,tvc_ss=a[d].tvc_ss?\"in_stock\":\"out_of_stock\",ga(\"ec:addImpression\",{id:a[d].tvc_i,name:a[d].tvc_n,category:a[d].tvc_c,list:c,price:a[d].tvc_p,position:a[d].tvc_po,dimension1:tvc_ss,dimension4:a[d].tvc_pd+\"%\",dimension11:a[d].tvc_st,dimension12:a[d].tvc_rc,dimension13:a[d].tvc_rs}),\nt_json_length\u003Etvc_thr?0==t_send_threshold%tvc_thr\u0026\u0026(t_json_length-=tvc_thr,ga(\"send\",\"event\",\"Enhanced-Ecommerce\",\"load\",\"product_impression_\"+b,{nonInteraction:1})):(t_json_length--,0==t_json_length\u0026\u0026ga(\"send\",\"event\",\"Enhanced-Ecommerce\",\"load\",\"product_impression_\"+b,{nonInteraction:1}))}\"undefined\"!==typeof t_hmpgClick_call\u0026\u0026!0===t_hmpgClick_call\u0026\u0026\"undefined\"===typeof t_hmpgClick_called\u0026\u0026(t_setCookie(\"t_listname\",\"Featured Products\"),t_products_clicks(tvc_fp,\"fp\",\"Featured Products\"));\n\"undefined\"!==typeof t_srchpClick_call\u0026\u0026!0===t_srchpClick_call\u0026\u0026\"undefined\"===typeof t_srchpClick_called\u0026\u0026(t_setCookie(\"t_listname\",\"Search Results\"),t_products_clicks(tvc_pgc,\"srch\",\"Search Results\"));\"undefined\"!==typeof t_ppClickRDP_call\u0026\u0026!0===t_ppClickRDP_call\u0026\u0026\"undefined\"===typeof t_ppClickRDP_called\u0026\u0026t_products_clicks(tvc_rdp,\"rdp\",\"Related Products\");\n\"undefined\"!==typeof t_cpClick_call\u0026\u0026!0===t_cpClick_call\u0026\u0026\"undefined\"===typeof t_cpClick_called\u0026\u0026(t_setCookie(\"t_listname\",\"Category Page\"),t_products_clicks(tvc_pgc,\"cp\",\"Category Page\"));\"undefined\"!==typeof t_spClick_call\u0026\u0026!0===t_spClick_call\u0026\u0026\"undefined\"===typeof t_spClick_called\u0026\u0026(t_setCookie(\"t_listname\",\"Shop Page\"),t_products_clicks(tvc_pgc,\"sp\",\"Shop Page\"));\nfunction t_products_clicks(a,b,c){t_hmpgClick_called={};t_ppClickRDP_called={};t_cpClick_called={};t_spClick_called={};t_srchpClick_called={};jQuery(\"a:not([href*\\x3dadd-to-cart],.product_type_variable, .product_type_grouped)\").on(\"click\",function(){t_url=jQuery(this).attr(\"href\");(t_call_fired=prod_exists_in_JSON(t_url,a,b,c))||prod_exists_in_JSON(t_url,tvc_rcp,\"rp\",\"Recent Products\")})}\n\"undefined\"!==typeof t_hmpgATC_call\u0026\u0026!0===t_hmpgATC_call\u0026\u0026\"undefined\"===typeof t_hmpgATC_called\u0026\u0026t_products_ATC(tvc_h_a,tvc_fp);\"undefined\"!==typeof t_ppATCrdp_call\u0026\u0026!0===t_ppATCrdp_call\u0026\u0026\"undefined\"===typeof t_ppATCrdp_called\u0026\u0026t_products_ATC(tvc_p_a,tvc_rdp);\"undefined\"!==typeof t_commonATC_call\u0026\u0026!0===t_commonATC_call\u0026\u0026\"undefined\"===typeof t_commonATC_called\u0026\u0026t_products_ATC(tvc_c_a,tvc_pgc);\nfunction t_products_ATC(a,b){t_hmpgATC_called={};t_ppATCrdp_called={};t_commonATC_called={};jQuery(\"a[href*\\x3dadd-to-cart]\").on(\"click\",function(){t_url=jQuery(this).attr(\"href\");t_qty=jQuery(this).parent().find(\"input[name\\x3dquantity]\").val();if(\"\"==t_qty||void 0===t_qty)t_qty=\"1\";(t_ATC_call_fired=prod_ATC_link_exists(t_url,a,b,t_qty))||prod_ATC_link_exists(t_url,tvc_h_a,tvc_rcp,t_qty)})}\nfunction prod_exists_in_JSON(a,b,c,d){b.hasOwnProperty(a)?(tvc_ss=b[a].tvc_ss?\"in_stock\":\"out_of_stock\",ga(\"ec:addProduct\",{id:b[a].tvc_i,name:b[a].tvc_n,category:b[a].tvc_c,price:b[a].tvc_p,position:b[a].tvc_po,dimension1:tvc_ss,dimension4:b[a].tvc_pd+\"%\",dimension11:b[a].tvc_st,dimension12:b[a].tvc_rc,dimension13:b[a].tvc_rs}),ga(\"ec:setAction\",\"click\",{list:d}),ga(\"send\",\"event\",\"Enhanced-Ecommerce\",\"click\",\"product_click_\"+c,{nonInteraction:1}),t_call_fired=!0):t_call_fired=!1;return t_call_fired}\nfunction prod_ATC_link_exists(a,b,c,d){t_prod_url_key=b[a].tvc_u;c.hasOwnProperty(t_prod_url_key)?(tvc_ss=c[t_prod_url_key].tvc_ss?\"in_stock\":\"out_of_stock\",ga(\"set\",\"\\x26cu\",tvc_lc),ga(\"ec:addProduct\",{id:c[t_prod_url_key].tvc_i,name:c[t_prod_url_key].tvc_n,category:c[t_prod_url_key].tvc_c,price:c[t_prod_url_key].tvc_p,dimension1:tvc_ss,dimension4:c[t_prod_url_key].tvc_pd+\"%\",dimension11:c[t_prod_url_key].tvc_st,dimension12:c[t_prod_url_key].tvc_rc,dimension13:c[t_prod_url_key].tvc_rs,quantity:d}),\na=t_getCookie(\"t_listname\"),ga(\"ec:setAction\",\"add\",{list:a}),ga(\"send\",\"event\",\"Enhanced-Ecommerce\",\"click\",\"add_to_cart_click\",{nonInteraction:1}),t_ATC_call_fired=!0):t_ATC_call_fired=!1;return t_ATC_call_fired};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1
    },{
      "function":"__html",
      "priority":3,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction t_empty(b){if(\"undefined\"===typeof b||null===b)return!0;if(\"undefined\"!=typeof b.length)return 0==b.length;var a=0,c;for(c in b)b.hasOwnProperty(c)\u0026\u0026a++;return 0==a}function t_ie_trim(b){return b=b.replace(\/^\\s+|\\s+$\/g,\"\")}function t_getCookie(b){var a,c=document.cookie.split(\";\");for(a=0;a\u003Cc.length;a++){var d=c[a].substr(0,c[a].indexOf(\"\\x3d\"));var e=c[a].substr(c[a].indexOf(\"\\x3d\")+1);d=d.replace(\/^\\s+|\\s+$\/g,\"\");if(d==b)return unescape(e)}return null}\nfunction t_setCookie(b,a){exdays=1;var c=new Date;c.setDate(c.getDate()+exdays);a=escape(a)+(null==exdays?\"\":\"; expires\\x3d\"+c.toUTCString());document.cookie=b+\"\\x3d\"+a+\"; Path\\x3d \/;\"}\nfunction prod_detail_view(){if(ga(\"set\",\"\\x26cu\",tvc_lc),tvc_ap=\"\",0\u003CjQuery(\".single_add_to_cart_button\").length){t_ATC_offset=jQuery(\".single_add_to_cart_button\").offset();t_ATC_top=t_ATC_offset.top;var b=window,a=document,c=a.documentElement;a=a.getElementsByTagName(\"body\")[0];b=(b.innerWidth||c.clientWidth||a.clientWidth,b.innerHeight||c.clientHeight||a.clientHeight);tvc_ap=t_ATC_top\u003Eb?\"BTF\":\"ATF\"}tvc_ss=tvc_po.tvc_ss?\"in_stock\":\"out_of_stock\";get_prod_seq=t_getCookie(\"t_prod_seq\");t_empty(get_prod_seq)?\n(t_setCookie(\"t_prod_seq\",tvc_po.tvc_i),t_prod_seq=tvc_po.tvc_i,ga(\"set\",\"dimension9\",t_prod_seq)):(get_prod_seq=t_ie_trim(get_prod_seq),-1===get_prod_seq.indexOf(tvc_po.tvc_i)\u0026\u0026(t_prod_seq=decodeURI(t_getCookie(\"t_prod_seq\"))+\"|\"+tvc_po.tvc_i,t_setCookie(\"t_prod_seq\",decodeURI(t_getCookie(\"t_prod_seq\"))+\"|\"+tvc_po.tvc_i),ga(\"set\",\"dimension9\",t_prod_seq)));t_pDetail_called={};ga(\"ec:addProduct\",{id:tvc_po.tvc_i,name:tvc_po.tvc_n,category:tvc_po.tvc_c,dimension1:tvc_ss,dimension4:tvc_po.tvc_pd+\"%\",\ndimension10:tvc_ap,dimension11:tvc_po.tvc_st,dimension12:tvc_po.tvc_rc,dimension13:tvc_po.tvc_rs,metric3:tvc_po.tvc_p});b=t_getCookie(\"t_listname\");\"undefined\"==typeof b||\"null\"===b?ga(\"ec:setAction\",\"detail\",{list:\"Category Page\"}):(b=t_getCookie(\"t_listname\"),ga(\"ec:setAction\",\"detail\",{list:b}));ga(\"send\",\"event\",\"Enhanced-Ecommerce\",\"load\",\"product_impression_pp\",{nonInteraction:1});t_setCookie(\"t_ATC_pos\",tvc_ap)}\nfunction single_ATC(){t_sATC_called={};jQuery(\"button[class*\\x3d'btn-buy-shop'],button[class*\\x3d'single_add_to_cart_button'], button[class*\\x3d'add_to_cart']\").click(function(){function b(a){ga(\"ec:addProduct\",{id:tvc_po.tvc_var[t_get_vid].tvc_vi,name:tvc_po.tvc_n,category:tvc_po.tvc_c,price:tvc_po.tvc_var[t_get_vid].tvc_vp,variant:t_vco,dimension1:tvc_ss,dimension4:tvc_po.tvc_var[t_get_vid].tvc_pd+\"%\",dimension10:t_getCookie(\"t_ATC_pos\"),dimension11:tvc_po.tvc_st,dimension12:tvc_po.tvc_rc,dimension13:tvc_po.tvc_rs,\ndimension16:t_vsi,quantity:t_qty})}t_qty=jQuery(this).parent().find(\"input[name\\x3dquantity]\").val();t_qty=jQuery(this).parent().find(\"input[name\\x3dquantity]\").val();ga(\"set\",\"\\x26cu\",tvc_lc);var a=t_getCookie(\"first_ATC\");t_empty(a)\u0026\u0026(start_timestmp=t_getCookie(\"ppviewtimer\"),void 0!==start_timestmp\u0026\u0026\"\"!==start_timestmp)\u0026\u0026(a=new Date-new Date(start_timestmp),a=Math.round(a\/1E3).toString(),ga(\"set\",\"dimension15\",a),t_setCookie(\"first_ATC\",1));if(t_get_vid=jQuery(this).parents(\"form\").find('input[name\\x3d\"variation_id\"]').val(),\nt_empty(t_get_vid))tvc_ss=tvc_po.tvc_ss?\"in_stock\":\"out_of_stock\",ga(\"ec:addProduct\",{id:tvc_po.tvc_i,name:tvc_po.tvc_n,category:tvc_po.tvc_c,price:tvc_po.tvc_p,dimension1:tvc_ss,dimension4:tvc_po.tvc_pd+\"%\",dimension10:t_getCookie(\"t_ATC_pos\"),dimension11:tvc_po.tvc_st,dimension12:tvc_po.tvc_rc,dimension13:tvc_po.tvc_rs,quantity:t_qty});else{if(tvc_ss=tvc_po.tvc_var[t_get_vid].tvc_vss?\"in_stock\":\"out_of_stock\",t_vco=\"\",t_vsi=\"\",tvc_po.tvc_var[t_get_vid].hasOwnProperty(\"tvc_vat\"))for(t_identify_attr=\nObject.keys(tvc_po.tvc_var[t_get_vid].tvc_vat),i=0;i\u003Ct_identify_attr.length;i++)-1\u003Ct_identify_attr[i].indexOf(\"color\")?t_vco=tvc_po.tvc_var[t_get_vid].tvc_vat[t_identify_attr[i]]:-1\u003Ct_identify_attr[i].indexOf(\"size\")\u0026\u0026(t_vsi=tvc_po.tvc_var[t_get_vid].tvc_vat[t_identify_attr[i]]);b(!0);ga(\"ec:setAction\",\"detail\");ga(\"send\",\"event\",\"Enhanced-Ecommerce\",\"load\",\"product_impression_pp\",{nonInteraction:1});b()}a=t_getCookie(\"t_listname\");\"undefined\"==typeof a||\"null\"===a?ga(\"ec:setAction\",\"detail\",{list:\"Category Page\"}):\n(a=t_getCookie(\"t_listname\"),ga(\"ec:setAction\",\"add\",{list:a}));ga(\"send\",\"event\",\"Enhanced-Ecommerce\",\"click\",\"add_to_cart_click\",{nonInteraction:1})})}\nfunction remove_from_cart(){t_remove_called={};jQuery('a[href*\\x3d\"remove_item\\x3d\"]').click(function(){if(t_url=t_ie_trim(jQuery(this).attr(\"href\")),t_vco=\"\",t_vsi=\"\",tvc_cc[t_url].hasOwnProperty(\"tvc_vat\"))for(t_identify_attr=Object.keys(tvc_cc[t_url].tvc_vat),i=0;i\u003Ct_identify_attr.length;i++)-1\u003Ct_identify_attr[i].indexOf(\"color\")?t_vco=tvc_cc[t_url].tvc_vat[t_identify_attr[i]]:-1\u003Ct_identify_attr[i].indexOf(\"size\")\u0026\u0026(t_vsi=tvc_cc[t_url].tvc_vat[t_identify_attr[i]]);ga(\"set\",\"\\x26cu\",tvc_lc);tvc_ss=\ntvc_cc[t_url].tvc_ss?\"in_stock\":\"out_of_stock\";ga(\"ec:addProduct\",{id:tvc_cc[t_url].tvc_i,name:tvc_cc[t_url].tvc_n,category:tvc_cc[t_url].tvc_c,price:tvc_cc[t_url].tvc_p,quantity:tvc_cc[t_url].tvc_q,variant:t_vco,dimension1:tvc_ss,dimension4:tvc_cc[t_url].tvc_pd+\"%\",dimension10:t_getCookie(\"t_ATC_pos\"),dimension11:tvc_cc[t_url].tvc_st,dimension12:tvc_cc[t_url].tvc_rc,dimension13:tvc_cc[t_url].tvc_rs,dimension16:t_vsi});ga(\"ec:setAction\",\"remove\");ga(\"send\",\"event\",\"Enhanced-Ecommerce\",\"click\",\"remove_from_cart_click\",\n{nonInteraction:1})})}\nfunction chkout_prod_ga_snippet(b){t_vsi=t_vco=\"\";for(var a in tvc_ch){if(tvc_ch[a].hasOwnProperty(\"tvc_vat\"))for(t_identify_attr=Object.keys(tvc_ch[a].tvc_vat),i=0;i\u003Ct_identify_attr.length;i++)-1\u003Ct_identify_attr[i].indexOf(\"color\")?t_vco=tvc_ch[a].tvc_vat[t_identify_attr[i]]:-1\u003Ct_identify_attr[i].indexOf(\"size\")\u0026\u0026(t_vsi=tvc_ch[a].tvc_vat[t_identify_attr[i]]);tvc_ss=tvc_ch[a].tvc_ss?\"in_stock\":\"out_of_stock\";ga(\"ec:addProduct\",{id:tvc_ch[a].tvc_i,name:tvc_ch[a].tvc_n,category:tvc_ch[a].tvc_c,price:tvc_ch[a].tvc_p,\nquantity:tvc_ch[a].tvc_q,variant:t_vco,dimension1:tvc_ss,dimension4:tvc_ch[a].tvc_pd+\"%\",dimension10:t_getCookie(\"t_ATC_pos\"),dimension11:tvc_ch[a].tvc_st,dimension12:tvc_ch[a].tvc_rc,dimension13:tvc_ch[a].tvc_rs,dimension16:t_vsi})}ga(\"ec:setAction\",\"checkout\",{step:b});ga(\"send\",\"event\",\"Enhanced-Ecommerce\",\"load\",\"checkout_step_\"+b,{nonInteraction:1})}function checkout_step1(){t_chkout_S1_called={};chkout_prod_ga_snippet(1)}\nfunction checkout_step2(){t_chkout_S2_called={};t_tracked_s2_load=0;0===t_tracked_s2_load\u0026\u0026(chkout_prod_ga_snippet(2),t_tracked_s2_load++)}function checkout_events(){t_chkout_steps_event_cm={};t_tracked_s1_focus=0;jQuery(window).load(function(){0===t_tracked_s1_focus\u0026\u0026(chkout_prod_ga_snippet(1),t_tracked_s1_focus++)});t_chkout_S2_call_fo_flag=0;jQuery(\"input[name\\x3dbilling_first_name]\").on(\"focus\",function(){0===t_chkout_S2_call_fo_flag\u0026\u0026(chkout_prod_ga_snippet(2),t_chkout_S2_call_fo_flag++)})}\nfunction checkout_step3(){t_chkout_S3_called={};t_track_clk=0;jQuery(document).on(\"click\",\"#place_order\",function(){0===t_track_clk\u0026\u0026(t_status=basic_chkout_validation(),0==t_status\u0026\u0026(chkout_prod_ga_snippet(3),t_track_clk++));0==jQuery(\"input#createaccount:checked\").length\u0026\u0026(t_bCity=jQuery(\"#billing_city\").val(),t_sCity=0\u003CjQuery(\"input#ship-to-different-address-checkbox:checked\").length?jQuery(\"#shipping_city\").val():t_bCity,0\u003Ct_bCity.length\u0026\u00260\u003Ct_bCity.length\u0026\u0026(t_gCity=t_bCity+\"|\"+t_sCity,t_setCookieSession(\"t_gCity\",\nt_gCity)))})}\"undefined\"!=typeof t_pDetail_call\u0026\u0026!0===t_pDetail_call\u0026\u0026\"undefined\"==typeof t_pDetail_called\u0026\u0026prod_detail_view();\"undefined\"!=typeof t_sATC_call\u0026\u0026!0===t_sATC_call\u0026\u0026\"undefined\"==typeof t_sATC_called\u0026\u0026single_ATC();\"undefined\"!=typeof t_remove_call\u0026\u0026!0===t_remove_call\u0026\u0026\"undefined\"==typeof t_remove_called\u0026\u0026remove_from_cart();\"undefined\"!=typeof t_chkout_S1_call\u0026\u0026!0===t_chkout_S1_call\u0026\u0026\"undefined\"==typeof t_chkout_S1_called\u0026\u0026checkout_step1();\n\"undefined\"!=typeof t_chkout_S2_call\u0026\u0026!0===t_chkout_S2_call\u0026\u0026\"undefined\"==typeof t_chkout_S2_called\u0026\u0026checkout_step2();\"undefined\"!=typeof t_chkout_steps_event\u0026\u0026!0===t_chkout_steps_event\u0026\u0026\"undefined\"==typeof t_chkout_steps_event_cm\u0026\u0026checkout_events();\"undefined\"!=typeof t_chkout_S3_call\u0026\u0026!0===t_chkout_S3_call\u0026\u0026\"undefined\"==typeof t_chkout_S3_called\u0026\u0026checkout_step3();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":2
    },{
      "function":"__html",
      "priority":2,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EjQuery.noConflict();\"undefined\"!==typeof t_inter_call\u0026\u0026!0===t_inter_call\u0026\u0026\"undefined\"===typeof t_inter_called\u0026\u0026t_internal_promotion();\nfunction t_internal_promotion(){t_inter_called={};for(i=0;i\u003Ctvc_ip.length;i++)t_promo_key=Object.keys(tvc_ip[i]),t_promo_ele_length=jQuery(\"img[src\\x3d'\"+t_promo_key+\"']\").length,0\u003Ct_promo_ele_length\u0026\u0026ga(\"ec:addPromo\",{id:tvc_ip[i][t_promo_key].tvc_i,name:tvc_ip[i][t_promo_key].tvc_n,creative:tvc_ip[i][t_promo_key].tvc_c,position:tvc_ip[i][t_promo_key].tvc_po});0\u003Ct_promo_ele_length\u0026\u0026ga(\"send\",\"event\",\"Enhanced-Ecommerce\",\"load\",\"Internal_Promotion\",{nonInteraction:1});jQuery(\"img\").on(\"click\",function(){t_img_src=\njQuery(this).attr(\"src\");for(i=0;i\u003Ctvc_ip.length;i++)t_promo_key=Object.keys(tvc_ip[i]),t_img_src==t_promo_key\u0026\u0026(ga(\"ec:addPromo\",{id:tvc_ip[i][t_promo_key].tvc_i,name:tvc_ip[i][t_promo_key].tvc_n,creative:tvc_ip[i][t_promo_key].tvc_c,position:tvc_ip[i][t_promo_key].tvc_po}),ga(\"ec:setAction\",\"promo_click\"),ga(\"send\",\"event\",\"Enhanced-Ecommerce\",\"click\",\"Internal_Promotions\",{nonInteraction:1}))})}\"undefined\"!==typeof t_userid_call\u0026\u0026!0===t_userid_call\u0026\u0026\"undefined\"===typeof t_userid_called\u0026\u0026user_id_tracking();\nfunction user_id_tracking(){t_userid_called={};t_uid=t_getCookie(\"t_uid\");t_empty(t_uid)||(ga(\"set\",\"\\x26uid\",t_uid),ga(\"send\",\"event\",\"userid\",{nonInteraction:1}))}\nfunction basic_chkout_validation(){chkout_field_arr=\"billing_first_name billing_postcode billing_email billing_last_name billing_address_1 billing_city billing_phone\".split(\" \");for(i=t_status=0;i\u003Cchkout_field_arr.length;i++)t_field_extis=jQuery(\"input[name\\x3d\"+chkout_field_arr[i]+\"]\"),0\u003Ct_field_extis.length\u0026\u0026(\"\"==t_field_extis.val()||void 0==t_field_extis.val())\u0026\u0026(t_status+=1);return t_status}\"undefined\"!==typeof t_form_call\u0026\u0026!0===t_form_call\u0026\u0026\"undefined\"===typeof t_form_called\u0026\u0026form_field_tracking();\nfunction form_field_tracking(){t_form_called={};t_step_no=0;jQuery(document).on(\"blur\",\"form[name*\\x3d'checkout'] input[type\\x3d'text']\",function(){0\u003CjQuery(this).val().length\u0026\u0026(t_fieldname=jQuery(this).attr(\"name\"),\"\"!==t_fieldname\u0026\u0026void 0!=t_fieldname\u0026\u0026(t_step_no++,-1\u003Ct_fieldname.indexOf(\"billing\")?(t_action=\"billing\",t_label=t_fieldname):-1\u003Ct_fieldname.indexOf(\"shipping\")\u0026\u0026(t_action=\"shipping\",t_label=t_fieldname),ga(\"send\",\"event\",\"form_field_tracking\",t_action,t_label+\"_step\"+t_step_no,{nonInteraction:1})))});\njQuery(document).on(\"change\",\"select\",function(){t_default=jQuery(this).find(\"option:eq(0)\").text();t_text=jQuery(this).next(\"div\").find(\"a:eq(0) \\x3e span\").text();t_text!=t_default\u0026\u0026(t_step_no++,t_fieldname=jQuery(this).attr(\"name\"),\"\"!==t_fieldname\u0026\u0026void 0!=t_fieldname\u0026\u0026(-1\u003Ct_fieldname.indexOf(\"billing\")?(t_action=\"billing\",t_label=t_fieldname):-1\u003Ct_fieldname.indexOf(\"shipping\")\u0026\u0026(t_action=\"shipping\",t_label=t_fieldname),ga(\"send\",\"event\",\"form_field_tracking\",t_action,t_label+\"_step\"+t_step_no,\n{nonInteraction:1})))})}\"undefined\"!==typeof t_404_error_call\u0026\u0026!0===t_404_error_call\u0026\u0026\"undefined\"===typeof t_404_error_called\u0026\u0026error_404_tracking();function error_404_tracking(){t_404_error_called={};ga(\"send\",\"event\",\"404_error\",\"404\",document.location.href,{nonInteraction:1})}\n!function(b,h,m){var n,p={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0},k=b(h),e=[];b.scrollDepth=function(c){function f(a,d,b,v){n\u0026\u0026ga(\"send\",\"event\",\"Scroll Depth 4th\",a,d,1,{nonInteraction:c.nonInteraction?1:0})}function q(a,d,c){b.each(a,function(a,g){-1===b.inArray(a,e)\u0026\u0026d\u003E=g\u0026\u0026(f(\"Percentage\",a,d,c),e.push(a))})}function r(a,d,c){b.each(a,function(a,g){-1===b.inArray(g,e)\u0026\u0026b(g).length\u0026\u0026d\u003E=b(g).offset().top\u0026\u0026(f(\"Elements\",g,d,c),e.push(g))})}function t(a,\nc){var b,d,g,e=null,l=0,k=function(){l=new Date;e=null;g=a.apply(b,d)};return function(){var f=new Date;l||(l=f);var h=c-(f-l);return b=this,d=arguments,0\u003E=h?(clearTimeout(e),e=null,l=f,g=a.apply(b,d)):e||(e=setTimeout(k,h)),g}}var u=+new Date;c=b.extend({},p,c);b(m).height()\u003Cc.minHeight||(\"function\"==typeof ga\u0026\u0026(n=!0),c.percentage?f(\"Percentage\",\"Baseline\"):c.elements\u0026\u0026f(\"Elements\",\"Baseline\"),k.on(\"scroll.scrollDepth\",t(function(){var a=b(m).height(),d=h.innerHeight?h.innerHeight:k.height();d=k.scrollTop()+\nd;a={\"25%\":parseInt(.25*a,10),\"50%\":parseInt(.5*a,10),\"75%\":parseInt(.75*a,10),\"100%\":a-5};var f=+new Date-u;return e.length\u003E=4+c.elements.length?void k.off(\"scroll.scrollDepth\"):(c.elements\u0026\u0026r(c.elements,d,f),void(c.percentage\u0026\u0026q(a,d,f)))},500)))}()}(jQuery,window,document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction t_setCookie(a,b){exdays=1;var c=new Date;c.setDate(c.getDate()+exdays);b=escape(b)+(null==exdays?\"\":\"; expires\\x3d\"+c.toUTCString());document.cookie=a+\"\\x3d\"+b+\"; Path\\x3d \/;\"}function t_empty(a){if(\"undefined\"===typeof a||null===a)return!0;if(\"undefined\"!=typeof a.length)return 0==a.length;var b=0,c;for(c in a)a.hasOwnProperty(c)\u0026\u0026b++;return 0==b}\nfunction t_getCookie(a){var b,c=document.cookie.split(\";\");for(b=0;b\u003Cc.length;b++){var d=c[b].substr(0,c[b].indexOf(\"\\x3d\"));var e=c[b].substr(c[b].indexOf(\"\\x3d\")+1);d=d.replace(\/^\\s+|\\s+$\/g,\"\");if(d==a)return unescape(e)}return null}function t_delCookie(a){t_getCookie(a)\u0026\u0026t_setCookie(a,\"\")}\njQuery(document).ready(function(){if(\"undefined\"!==typeof tvc_td){start_timestmp_purchase=t_getCookie(\"ppviewtimer\");void 0!==start_timestmp_purchase\u0026\u0026\"\"!==start_timestmp_purchase\u0026\u0026(elapsed=new Date-new Date(start_timestmp_purchase),pp_purchase=Math.round(elapsed\/1E3).toString());ga(\"set\",\"dimension14\",pp_purchase);ga(\"set\",\"dimension2\",\"Thankyou Page\");ga(\"set\",\"dimension3\",tvc_td.tvc_ut);ga(\"set\",\"dimension5\",tvc_td.tvc_pm);tvc_dim6=t_empty(tvc_td.tvc_bad)||t_empty(tvc_td.tvc_sad)?t_getCookie(\"t_gCity\"):\ntvc_td.tvc_bad+\"|\"+tvc_td.tvc_sad;ga(\"set\",\"dimension6\",tvc_dim6);ga(\"set\",\"\\x26cu\",tvc_lc);t_vsi=t_vco=\"\";for(var a in tvc_oc){tvc_ss=tvc_oc[a].tvc_ss?\"in_stock\":\"out_of_stock\";if(tvc_oc[a].hasOwnProperty(\"tvc_vat\"))for(t_identify_attr=Object.keys(tvc_oc[a].tvc_vat),i=0;i\u003Ct_identify_attr.length;i++)-1\u003Ct_identify_attr[i].indexOf(\"color\")?t_vco=tvc_oc[a].tvc_vat[t_identify_attr[i]]:-1\u003Ct_identify_attr[i].indexOf(\"size\")\u0026\u0026(t_vsi=tvc_oc[a].tvc_vat[t_identify_attr[i]]);ga(\"ec:addProduct\",{id:tvc_oc[a].tvc_i,\nname:tvc_oc[a].tvc_n,category:tvc_oc[a].tvc_c,price:tvc_oc[a].tvc_p,quantity:tvc_oc[a].tvc_q,variant:t_vco,dimension1:tvc_ss,dimension4:tvc_oc[a].tvc_pd+\"%\",dimension10:t_getCookie(\"t_ATC_pos\"),dimension11:tvc_oc[a].tvc_st,dimension12:tvc_oc[a].tvc_rc,dimension13:tvc_oc[a].tvc_rs,dimension16:t_vsi})}ga(\"ec:setAction\",\"purchase\",{id:tvc_td.tvc_tid,affiliation:tvc_td.tvc_af,revenue:tvc_td.tvc_rev,tax:tvc_td.tvc_tt,shipping:tvc_td.tvc_sc,coupon:tvc_td.tvc_dc});ga(\"send\",\"event\",\"Enhanced-Ecommerce\",\n\"load\",\"order_confirmation\",{hitCallback:\"",["escape",["macro",5],7],"\"},{nonInteraction:1});t_cook_arry=[\"t_prod_seq\",\"ppviewtimer\",\"first_ATC\"];for(a in t_cook_arry)t_delCookie(t_cook_arry[a])}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/restyle-shop.com\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/camelliaempire.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/chummytees.net"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/lashproacademy.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/www.thematerialhandler.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/foodsafetyonline.ca"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/squeezyslim.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/lvwkl.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/glamoraskin.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/synergyformulaasia.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/rohsofficial.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/evapurity.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"http:\/\/leesaformula.com.my"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"ellshops.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"hotteesco.net"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"kovisdeals.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"mozostore.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"shirtprintstore.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"trinding.net"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"verdorado.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"wavetees.net"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"zeroser.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"famikool.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"cbd-medic.com\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"alvinaramallah.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"havi.co.il"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"chayalim.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"birthday.mommyiam.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"mackolia.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"probio.ro"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"barcelona-designs.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"yourpresent.shop"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"canecas24horas.com.br"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"bermedical.ro"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"qbshop.pl"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"cake2homes.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"cozmeed.co.id"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"cozmeed.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"esponjamagic.com.br"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"fitcookiesriodejaneiro.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"horecaprod.com.ua"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"julis-jewelrys.co.il"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"hadasoils.co.il"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"aprintheme.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"galasecrets.bg"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"lyone.co"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"mielearredo.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"shop.foxytotes.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"xfire.ee"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"flooringking.co.uk"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"trendeekart.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"vitagold.bg"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"into-you.de"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"sweetie-treats.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"bgbenton.co.uk"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"dabc.com.tw"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"zidicuir.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"dip32.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"vipplanners.com.br"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"greenvital.ch"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"volumenvlies.ch"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"impotron.ch"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"kuhfell.ch"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"stylenovi.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"buymalaysia.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"mercurymusic.co.za"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"pharmocanna.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"simvey.net"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"vreau-rolete.ro"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"shop-biltmain.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"globemining.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"blogkienquoc.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"ad.insideoutside.it"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"primedepot247.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"juliyahouse.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"zontasbau.de"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"ruitershopboxmeer.nl"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"www.ruitershopboxmeer.nl"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"segolflower.co.il"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"wholesaleflowers.store"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"exacoat.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"sacktowels.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"whitecroco.com.ua"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"tripcomforts.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"butternutinteriors.co.uk"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"tochilkazhuk.ru"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"antgadget.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"tacticalix.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"blanketheavy.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"amelie.store"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"zuklys-kuponai.lt"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"inspiredesignhouse.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"startpolish.pl"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"beeren-ondergoed.shop"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"nrdogs.hu"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"agrokosiarki.pl"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"yangpas.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"tuyyoshop.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"mona.com.ua"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"zootian.se"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"titansmade.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"linuxdesign.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"fashood.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"sespoint.ru"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"bethhayesdesigns.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"healingyourselfcompletely.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"deborahking.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"shopera.ch"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"elleselations.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"saleoye.pk"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"threadstudio.co.uk"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"lovertee.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"ellemate.co"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"guapas.co.il"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"powerobjects.ru"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"pulsedharmonix.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"silviofiorello.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"zymotec.fi"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"collectivehomestore.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"miculapicultor.ro"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"wackyevents.no"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"tempweb3.datastack.cz"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"nuzest.cz"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"franckdunand.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"axiomabeauty.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"killercoffeeco.com.au"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"qoopocket.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"smilesongs.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"mr-ems.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"terlisdesigns.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"tort-krk.pl"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"shop.brita.ch"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"henliahandmade.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"squeakandshout.co.uk"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"popcorningpiggy.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"creationskin.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"old.aprajitatoor.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"thelittlewizard.brusel.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"brusel.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"buttonowl.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"dreamanddesign.co.uk"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"marianilsdotter.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"mercelo.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"muqu.co"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"maminat.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"rodel.at"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"rubysorganics.in"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"bremenkampconstrucao.com.br"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"casaserralheiro.com.br"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"palaciodosbrinquedos.com.br"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"chi.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"eidi-komotiriou.gr"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"feedmepetshop.gr"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"uleidecanepa.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"japanahome.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"wackyevents.dk"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"foolthebees.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"makewhatmatters.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"khohangmadeinvietnam.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"wackyevent.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"xiaomi.boutique"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"nuzest.com.au"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/socialfamer.com\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"streamlinefiltration.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"bertierose.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"calicofieldslavender.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"dashingceramics.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"hollerchic.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"hummingbirdlanefabrics.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"pickmepopcorn.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"riomardesigns.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"serenityinchains.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"sourceelectricalservice.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"whitebirchhill.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"bagsyoutote.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"lemslight.co.uk"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"blessingvhart.us"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"littlelesliescorner.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"catchthefireworshipflags.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"charlottespapercompany.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"mytuchi.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"danceswithyarns.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"mimisfavorite.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"letterartonline.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"designbyjaz.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"fromblankpages.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"doodlepaddesigns.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"dzbagshop.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"eachpeach.net.au"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"naturadeezeacs.net"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"theruthlesscrafter.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"endlesspossibilitieshandmade.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"timesavingtemplates.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"studioauckland.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"joelaine.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"stacyvetter.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"vnvdesign.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"ferasupplies.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"gwynstoneoriginals.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"zenmundi.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"desertstonedesigns.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"creativelycluttered.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"expressivitystudios.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"castlevalleygems.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"swankycrafts.co.uk"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"jclevelandfineart.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"cheryljacobsdesigns.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"jessicareneecustoms.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"frommetoyarn.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"kaleidoscopesandpolkadots.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"karolinaolsson.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"legatomasterpiece.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"zkrart.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"minniesartstudio.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"mistyseastudio.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"morelovemama.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"close2perfectbraids.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"palmettoengraving.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"wavesofgracesoaps.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"greenearthnaturals.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"mosswoodcreek.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"phoenixandpeacock.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"oneplanetsanitation.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"raspberrysummerco.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"remilee.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"chagrinrivercreations.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"revivalink.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"silvermane.biz"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"sioneandalana.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"sweetdreamscreative.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"sweetsallyssoaps.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"uniquehandcraftedjewelry.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"thesparklyco.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"timberbellepress.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"wendyjeanrogers.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"mimamode.nl"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"my-woodfiredoven.com"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"?key=wc_order"
    }],
  "rules":[
    [["if",0,1],["add",0,1,2]],
    [["if",1,240],["unless",239],["add",3]],
    [["if",1,2],["block",0,1,2,3]],
    [["if",1,3],["block",0,1,2,3]],
    [["if",1,4],["block",0,1,2,3]],
    [["if",1,5],["block",0,1,2,3]],
    [["if",1,6],["block",0,1,2,3]],
    [["if",1,7],["block",0,1,2,3]],
    [["if",1,8],["block",0,1,2,3]],
    [["if",1,9],["block",0,1,2,3]],
    [["if",1,10],["block",0,1,2,3]],
    [["if",1,11],["block",0,1,2,3]],
    [["if",1,12],["block",0,1,2,3]],
    [["if",1,13],["block",0,1,2,3]],
    [["if",1,14],["block",0,1,2,3]],
    [["if",1,15],["block",0,1,2,3]],
    [["if",1,16],["block",0,1,2,3]],
    [["if",1,17],["block",0,1,2,3]],
    [["if",1,18],["block",0,1,2,3]],
    [["if",1,19],["block",0,1,2,3]],
    [["if",1,20],["block",0,1,2,3]],
    [["if",1,21],["block",0,1,2,3]],
    [["if",1,22],["block",0,1,2,3]],
    [["if",1,23],["block",0,1,2,3]],
    [["if",1,24],["block",0,1,2,3]],
    [["if",1,25],["block",0,1,2,3]],
    [["if",1,26],["block",0,1,2,3]],
    [["if",1,27],["block",0,1,2,3]],
    [["if",1,28],["block",0,1,2,3]],
    [["if",1,29],["block",0,1,2,3]],
    [["if",1,30],["block",0,1,2,3]],
    [["if",1,31],["block",0,1,2,3]],
    [["if",1,32],["block",0,1,2,3]],
    [["if",1,33],["block",0,1,2,3]],
    [["if",1,34],["block",0,1,2,3]],
    [["if",1,35],["block",0,1,2,3]],
    [["if",1,36],["block",0,1,2,3]],
    [["if",1,37],["block",0,1,2,3]],
    [["if",1,38],["block",0,1,2,3]],
    [["if",1,39],["block",0,1,2,3]],
    [["if",1,40],["block",0,1,2,3]],
    [["if",1,41],["block",0,1,2,3]],
    [["if",1,42],["block",0,1,2,3]],
    [["if",1,43],["block",0,1,2,3]],
    [["if",1,44],["block",0,1,2,3]],
    [["if",1,45],["block",0,1,2,3]],
    [["if",1,46],["block",0,1,2,3]],
    [["if",1,47],["block",0,1,2,3]],
    [["if",1,48],["block",0,1,2,3]],
    [["if",1,49],["block",0,1,2,3]],
    [["if",1,50],["block",0,1,2,3]],
    [["if",1,51],["block",0,1,2,3]],
    [["if",1,52],["block",0,1,2,3]],
    [["if",1,53],["block",0,1,2,3]],
    [["if",1,54],["block",0,1,2,3]],
    [["if",1,55],["block",0,1,2,3]],
    [["if",1,56],["block",0,1,2,3]],
    [["if",1,57],["block",0,1,2,3]],
    [["if",1,58],["block",0,1,2,3]],
    [["if",1,59],["block",0,1,2,3]],
    [["if",1,60],["block",0,1,2,3]],
    [["if",1,61],["block",0,1,2,3]],
    [["if",1,62],["block",0,1,2,3]],
    [["if",1,63],["block",0,1,2,3]],
    [["if",1,64],["block",0,1,2,3]],
    [["if",1,65],["block",0,1,2,3]],
    [["if",1,66],["block",0,1,2,3]],
    [["if",1,67],["block",0,1,2,3]],
    [["if",1,68],["block",0,1,2,3]],
    [["if",1,69],["block",0,1,2,3]],
    [["if",1,70],["block",0,1,2,3]],
    [["if",1,71],["block",0,1,2,3]],
    [["if",1,72],["block",0,1,2,3]],
    [["if",1,73],["block",0,1,2,3]],
    [["if",1,74],["block",0,1,2,3]],
    [["if",1,75],["block",0,1,2,3]],
    [["if",1,76],["block",0,1,2,3]],
    [["if",1,77],["block",0,1,2,3]],
    [["if",1,78],["block",0,1,2,3]],
    [["if",1,79],["block",0,1,2,3]],
    [["if",1,80],["block",0,1,2,3]],
    [["if",1,81],["block",0,1,2,3]],
    [["if",1,82],["block",0,1,2,3]],
    [["if",1,83],["block",0,1,2,3]],
    [["if",1,84],["block",0,1,2,3]],
    [["if",1,85],["block",0,1,2,3]],
    [["if",1,86],["block",0,1,2,3]],
    [["if",1,87],["block",0,1,2,3]],
    [["if",1,88],["block",0,1,2,3]],
    [["if",1,89],["block",0,1,2,3]],
    [["if",1,90],["block",0,1,2,3]],
    [["if",1,91],["block",0,1,2,3]],
    [["if",1,92],["block",0,1,2,3]],
    [["if",1,93],["block",0,1,2,3]],
    [["if",1,94],["block",0,1,2,3]],
    [["if",1,95],["block",0,1,2,3]],
    [["if",1,96],["block",0,1,2,3]],
    [["if",1,97],["block",0,1,2,3]],
    [["if",1,98],["block",0,1,2,3]],
    [["if",1,99],["block",0,1,2,3]],
    [["if",1,100],["block",0,1,2,3]],
    [["if",1,101],["block",0,1,2,3]],
    [["if",1,102],["block",0,1,2,3]],
    [["if",1,103],["block",0,1,2,3]],
    [["if",1,104],["block",0,1,2,3]],
    [["if",1,105],["block",0,1,2,3]],
    [["if",1,106],["block",0,1,2,3]],
    [["if",1,107],["block",0,1,2,3]],
    [["if",1,108],["block",0,1,2,3]],
    [["if",1,109],["block",0,1,2,3]],
    [["if",1,110],["block",0,1,2,3]],
    [["if",1,111],["block",0,1,2,3]],
    [["if",1,112],["block",0,1,2,3]],
    [["if",1,113],["block",0,1,2,3]],
    [["if",1,114],["block",0,1,2,3]],
    [["if",1,115],["block",0,1,2,3]],
    [["if",1,116],["block",0,1,2,3]],
    [["if",1,117],["block",0,1,2,3]],
    [["if",1,118],["block",0,1,2,3]],
    [["if",1,119],["block",0,1,2,3]],
    [["if",1,120],["block",0,1,2,3]],
    [["if",1,121],["block",0,1,2,3]],
    [["if",1,122],["block",0,1,2,3]],
    [["if",1,123],["block",0,1,2,3]],
    [["if",1,124],["block",0,1,2,3]],
    [["if",1,125],["block",0,1,2,3]],
    [["if",1,126],["block",0,1,2,3]],
    [["if",1,127],["block",0,1,2,3]],
    [["if",1,128],["block",0,1,2,3]],
    [["if",1,129],["block",0,1,2,3]],
    [["if",1,130],["block",0,1,2,3]],
    [["if",1,131],["block",0,1,2,3]],
    [["if",1,132],["block",0,1,2,3]],
    [["if",1,133],["block",0,1,2,3]],
    [["if",1,134],["block",0,1,2,3]],
    [["if",1,135],["block",0,1,2,3]],
    [["if",1,136],["block",0,1,2,3]],
    [["if",1,137],["block",0,1,2,3]],
    [["if",1,138],["block",0,1,2,3]],
    [["if",1,139],["block",0,1,2,3]],
    [["if",1,140],["block",0,1,2,3]],
    [["if",1,141],["block",0,1,2,3]],
    [["if",1,142],["block",0,1,2,3]],
    [["if",1,143],["block",0,1,2,3]],
    [["if",1,144],["block",0,1,2,3]],
    [["if",1,145],["block",0,1,2,3]],
    [["if",1,146],["block",0,1,2,3]],
    [["if",1,147],["block",0,1,2,3]],
    [["if",1,148],["block",0,1,2,3]],
    [["if",1,149],["block",0,1,2,3]],
    [["if",1,150],["block",0,1,2,3]],
    [["if",1,151],["block",0,1,2,3]],
    [["if",1,152],["block",0,1,2,3]],
    [["if",1,153],["block",0,1,2,3]],
    [["if",1,154],["block",0,1,2,3]],
    [["if",1,155],["block",0,1,2,3]],
    [["if",1,156],["block",0,1,2,3]],
    [["if",1,157],["block",0,1,2,3]],
    [["if",1,158],["block",0,1,2,3]],
    [["if",1,159],["block",0,1,2,3]],
    [["if",1,160],["block",0,1,2,3]],
    [["if",1,161],["block",0,1,2,3]],
    [["if",1,162],["block",0,1,2,3]],
    [["if",1,163],["block",0,1,2,3]],
    [["if",1,164],["block",0,1,2,3]],
    [["if",1,165],["block",0,1,2,3]],
    [["if",1,166],["block",0,1,2,3]],
    [["if",1,167],["block",0,1,2,3]],
    [["if",1,168],["block",0,1,2,3]],
    [["if",1,169],["block",0,1,2,3]],
    [["if",1,170],["block",0,1,2,3]],
    [["if",1,171],["block",0,1,2,3]],
    [["if",1,172],["block",0,1,2,3]],
    [["if",1,173],["block",0,1,2,3]],
    [["if",1,174],["block",0,1,2,3]],
    [["if",1,175],["block",0,1,2,3]],
    [["if",1,176],["block",0,1,2,3]],
    [["if",1,177],["block",0,1,2,3]],
    [["if",1,178],["block",0,1,2,3]],
    [["if",1,179],["block",0,1,2,3]],
    [["if",1,180],["block",0,1,2,3]],
    [["if",1,181],["block",0,1,2,3]],
    [["if",1,182],["block",0,1,2,3]],
    [["if",1,183],["block",0,1,2,3]],
    [["if",1,184],["block",0,1,2,3]],
    [["if",1,185],["block",0,1,2,3]],
    [["if",1,186],["block",0,1,2,3]],
    [["if",1,187],["block",0,1,2,3]],
    [["if",1,188],["block",0,1,2,3]],
    [["if",1,189],["block",0,1,2,3]],
    [["if",1,190],["block",0,1,2,3]],
    [["if",1,191],["block",0,1,2,3]],
    [["if",1,192],["block",0,1,2,3]],
    [["if",1,193],["block",0,1,2,3]],
    [["if",1,194],["block",0,1,2,3]],
    [["if",1,195],["block",0,1,2,3]],
    [["if",1,196],["block",0,1,2,3]],
    [["if",1,197],["block",0,1,2,3]],
    [["if",1,198],["block",0,1,2,3]],
    [["if",1,199],["block",0,1,2,3]],
    [["if",1,200],["block",0,1,2,3]],
    [["if",1,201],["block",0,1,2,3]],
    [["if",1,202],["block",0,1,2,3]],
    [["if",1,203],["block",0,1,2,3]],
    [["if",1,204],["block",0,1,2,3]],
    [["if",1,205],["block",0,1,2,3]],
    [["if",1,206],["block",0,1,2,3]],
    [["if",1,207],["block",0,1,2,3]],
    [["if",1,208],["block",0,1,2,3]],
    [["if",1,209],["block",0,1,2,3]],
    [["if",1,210],["block",0,1,2,3]],
    [["if",1,211],["block",0,1,2,3]],
    [["if",1,212],["block",0,1,2,3]],
    [["if",1,213],["block",0,1,2,3]],
    [["if",1,214],["block",0,1,2,3]],
    [["if",1,215],["block",0,1,2,3]],
    [["if",1,216],["block",0,1,2,3]],
    [["if",1,217],["block",0,1,2,3]],
    [["if",1,218],["block",0,1,2,3]],
    [["if",1,219],["block",0,1,2,3]],
    [["if",1,220],["block",0,1,2,3]],
    [["if",1,221],["block",0,1,2,3]],
    [["if",1,222],["block",0,1,2,3]],
    [["if",1,223],["block",0,1,2,3]],
    [["if",1,224],["block",0,1,2,3]],
    [["if",1,225],["block",0,1,2,3]],
    [["if",1,226],["block",0,1,2,3]],
    [["if",1,227],["block",0,1,2,3]],
    [["if",1,228],["block",0,1,2,3]],
    [["if",1,229],["block",0,1,2,3]],
    [["if",1,230],["block",0,1,2,3]],
    [["if",1,231],["block",0,1,2,3]],
    [["if",1,232],["block",0,1,2,3]],
    [["if",1,233],["block",0,1,2,3]],
    [["if",1,234],["block",0,1,2,3]],
    [["if",1,235],["block",0,1,2,3]],
    [["if",1,236],["block",0,1,2,3]],
    [["if",1,237],["block",0,1,2,3]],
    [["if",1,238],["block",0,1,2,3]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={Jf:!0},fa={};try{fa.__proto__=ea;da=fa.Jf;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca,ia=this||self,ja=/^[\w+/_-]+[=]{0,2}$/,ka=null;var ma=function(){},na=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},oa=function(a){return"number"==typeof a&&!isNaN(a)},pa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},qa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},sa=function(a,b){if(a&&pa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},va=function(a,b){if(!oa(a)||
!oa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},xa=function(a,b){for(var c=new wa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ya=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(pa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},wa=function(){this.prefix="gtm.";this.values={}};wa.prototype.set=function(a,b){this.values[this.prefix+a]=b};wa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ha=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ia=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ja=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ka=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ma=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Oa=function(a){var b=
[];ya(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Pa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Qa=function(a){if(null==a)return String(a);var b=Pa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Sa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ta=function(a){if(!a||"object"!=Qa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Sa(a,"constructor")&&!Sa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Sa(a,b)},n=function(a,b){var c=b||("array"==Qa(a)?[]:{}),d;for(d in a)if(Sa(a,d)){var e=a[d];"array"==Qa(e)?("array"!=Qa(c[d])&&(c[d]=[]),c[d]=n(e,c[d])):Ta(e)?(Ta(c[d])||(c[d]={}),c[d]=n(e,c[d])):c[d]=e}return c};
var Ua=[],Va={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Wa=function(a){return Va[a]},Ya=/[\x00\x22\x26\x27\x3c\x3e]/g;var bb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},db=function(a){return cb[a]};Ua[7]=function(a){return String(a).replace(bb,db)};
Ua[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(bb,db)+"'"}};var eb=/[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g;Ua[9]=function(a){return String(a).replace(eb,db)};var lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ob=function(a){return mb[a]};Ua[16]=function(a){return a};var qb;
var rb=[],sb=[],tb=[],ub=[],vb=[],wb={},xb,yb,zb,Ab=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Bb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=wb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):qb(c,e,b)},Eb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Cb(a[e],b,c));
return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=wb[b];return c?c.priorityOverride||0:0},Cb=function(a,b,c){if(pa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Cb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=rb[f];if(!h||b.Xc(h))return;c[f]=!0;try{var k=Eb(h,b,c);k.vtp_gtmEventId=b.id;d=Bb(k,b);zb&&(d=zb.ig(d,k))}catch(x){b.Fe&&b.Fe(x,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Cb(a[l],b,c)]=Cb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,q=1;q<a.length;q++){var r=Cb(a[q],b,c);yb&&(m=m||r===yb.Jb);d.push(r)}return yb&&m?yb.lg(d):d.join("");case "escape":d=Cb(a[1],b,c);if(yb&&pa(a[1])&&"macro"===a[1][0]&&yb.Jg(a))return yb.$g(d);d=String(d);for(var t=2;t<a.length;t++)Ua[a[t]]&&(d=Ua[a[t]](d));return d;case "tag":var p=a[1];if(!ub[p])throw Error("Unable to resolve tag reference "+p+".");return d={se:a[2],
index:p};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var w=Gb(u,b,c),v=!!a[4];return v||2!==w?v!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Gb=function(a,b,c){try{return xb(Eb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Hb=function(){var a=function(b){return{toString:function(){return b}}};return{Bd:a("convert_case_to"),Cd:a("convert_false_to"),Dd:a("convert_null_to"),Ed:a("convert_true_to"),Fd:a("convert_undefined_to"),Gh:a("debug_mode_metadata"),wa:a("function"),hf:a("instance_name"),nf:a("live_only"),qf:a("malware_disabled"),rf:a("metadata"),Hh:a("original_vendor_template_id"),vf:a("once_per_event"),Md:a("once_per_load"),Ud:a("setup_tags"),Wd:a("tag_id"),Xd:a("teardown_tags")}}();var Ib=null,Lb=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Ib=Jb(a);for(var e=0;e<sb.length;e++){var f=sb[e],h=Kb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],q=0;q<ub.length;q++)c[q]&&!d[q]&&(m[q]=!0);return m},Kb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ib(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Ib(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Jb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Gb(tb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var C={$a:"_ee",Jc:"_syn",Jh:"_uei",zc:"event_callback",Ib:"event_timeout",H:"gtag.config",ca:"allow_ad_personalization_signals",Ac:"restricted_data_processing",Ya:"allow_google_signals",da:"cookie_expires",Hb:"cookie_update",Za:"session_duration",ja:"user_properties",sa:"transport_url",M:"ads_data_redaction"};C.Be=[C.ca,C.Ya,C.Hb];C.Ee=[C.da,C.Ib,C.Za];var E=window,F=document,fc=navigator,gc=F.currentScript&&F.currentScript.src,hc=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},ic=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;ic(d,b);c&&(d.onerror=c);var e;if(null===ka)b:{var f=ia.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ja.test(k)){ka=k;break b}}ka=""}e=ka;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},kc=function(){if(gc){var a=gc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},lc=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);ic(c,b);void 0!==a&&(c.src=a);return c},mc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},nc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},oc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){E.setTimeout(a,0)},pc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},qc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},rc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},sc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},tc=function(a){fc.sendBeacon&&fc.sendBeacon(a)||mc(a)},uc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var vc={},I=function(a,b){vc[a]=vc[a]||[];vc[a][b]=!0},wc=function(a){for(var b=[],c=vc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var xc=[];function yc(){var a=hc("google_tag_data",{});a.ics||(a.ics={entries:{},set:zc,update:Ac,addListener:Bc,notifyListeners:Dc,active:!1});return a.ics}
function zc(a,b,c,d,e,f){var h=yc();h.active=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},m=l.region,q=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(q===e||(q===d?m!==e:!q&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:q,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&E.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,Ec(a),Dc(),I("TAGGING",2))},f)}}}
function Ac(a,b){var c=yc();c.active=!0;if(void 0!=b){var d=Fc(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Fc(a);f.quiet?(f.quiet=!1,Ec(a)):h!==d&&Ec(a)}}function Bc(a,b){xc.push({me:a,vg:b})}function Ec(a){for(var b=0;b<xc.length;++b){var c=xc[b];pa(c.me)&&-1!==c.me.indexOf(a)&&(c.Ne=!0)}}function Dc(){for(var a=0;a<xc.length;++a){var b=xc[a];if(b.Ne){b.Ne=!1;try{b.vg.call()}catch(c){}}}}
var Fc=function(a){var b=yc().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Gc=function(a){return!(yc().entries[a]||{}).quiet},Hc=function(){return yc().active},Ic=function(a,b){yc().addListener(a,b)},Jc=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Gc(b[e]))return!0;return!1}if(c()){var d=!1;Ic(b,function(){d||c()||(d=!0,a())})}else a()},Kc=function(a,b){if(!1===Fc(b)){var c=!1;Ic([b],function(){!c&&Fc(b)&&(a(),c=!0)})}};var Lc=[C.o,C.F],Mc=function(a){var b=a[C.gh];b&&I("GTM",40);var c=a[C.nh];c&&I("GTM",41);for(var d=pa(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Lc.length;f++){var h=Lc[f],k=a[Lc[f]],l=d[e];yc().set(h,k,l,"UA","UA-63",c)}},Nc=function(a){for(var b=0;b<Lc.length;b++){var c=Lc[b],d=a[Lc[b]];yc().update(c,d)}yc().notifyListeners()},Oc=function(a){var b=Fc(a);return void 0!=b?b:!0},Pc=function(){for(var a=[],b=0;b<Lc.length;b++){var c=Fc(Lc[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},Qc=function(a){Kc(a,C.o)},Rc=function(a,b){Jc(a,b)};var Tc=function(a){return Sc?F.querySelectorAll(a):null},Uc=function(a,b){if(!Sc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Vc=!1;if(F.querySelectorAll)try{var Wc=F.querySelectorAll(":root");Wc&&1==Wc.length&&Wc[0]==F.documentElement&&(Vc=!0)}catch(a){}var Sc=Vc;var jd={},kd=null,ld=Math.random();jd.s="GTM-TSHSWL";jd.Nb="5k1";jd.Ld="";var md={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},od="www.googletagmanager.com/gtm.js";
var pd=od,qd=null,rd=null,sd=null,td="//www.googletagmanager.com/a?id="+jd.s+"&cv=40",ud={},vd={},wd=function(){var a=kd.sequence||0;kd.sequence=a+1;return a};
var xd=function(){return"&tc="+ub.filter(function(a){return a}).length},Ad=function(){yd||(yd=E.setTimeout(zd,500))},zd=function(){yd&&(E.clearTimeout(yd),yd=void 0);void 0===Bd||Cd[Bd]&&!Dd&&!Ed||(Fd[Bd]||Gd.Lg()||0>=Hd--?(I("GTM",1),Fd[Bd]=!0):(Gd.ih(),mc(Id()),Cd[Bd]=!0,Jd=Kd=Ed=Dd=""))},Id=function(){var a=Bd;if(void 0===a)return"";var b=wc("GTM"),c=wc("TAGGING");return[Ld,Cd[a]?"":"&es=1",Md[a],b?"&u="+b:"",c?"&ut="+c:"",xd(),Dd,Ed,Kd,Jd,"&z=0"].join("")},Nd=function(){return[td,"&v=3&t=t","&pid="+
va(),"&rv="+jd.Nb].join("")},Od="0.005000">Math.random(),Ld=Nd(),Pd=function(){Ld=Nd()},Cd={},Dd="",Ed="",Jd="",Kd="",Bd=void 0,Md={},Fd={},yd=void 0,Gd=function(a,b){var c=0,d=0;return{Lg:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},ih:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),Hd=1E3,Qd=function(a,b){if(Od&&!Fd[a]&&Bd!==a){zd();Bd=a;Jd=Dd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Md[a]="&e="+c+"&eid="+a;Ad()}},Rd=function(a,b,c){if(Od&&!Fd[a]&&
b){a!==Bd&&(zd(),Bd=a);var d,e=String(b[Hb.wa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Dd=Dd?Dd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(wb[h]?"1":"2")+d;Jd=Jd?Jd+"."+k:"&ti="+k;Ad();2022<=Id().length&&zd()}},Sd=function(a,b,c){if(Od&&!Fd[a]){a!==Bd&&(zd(),Bd=a);var d=c+b;Ed=Ed?Ed+
"."+d:"&epr="+d;Ad();2022<=Id().length&&zd()}};var Td={},Ud=new wa,Vd={},Wd={},Zd={name:"dataLayer",set:function(a,b){n(Ma(a,b),Vd);Xd()},get:function(a){return Yd(a,2)},reset:function(){Ud=new wa;Vd={};Xd()}},Yd=function(a,b){if(2!=b){var c=Ud.get(a);if(Od){var d=$d(a);c!==d&&I("GTM",5)}return c}return $d(a)},$d=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:ae(b)},ae=function(a){for(var b=Vd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var be=function(a,b){Wd.hasOwnProperty(a)||(Ud.set(a,b),n(Ma(a,b),Vd),Xd())},Xd=function(a){ya(Wd,function(b,c){Ud.set(b,c);n(Ma(b,void 0),Vd);n(Ma(b,c),Vd);a&&delete Wd[b]})},ce=function(a,b,c){Td[a]=Td[a]||{};var d=1!==c?$d(b):Ud.get(b);"array"===Qa(d)||"object"===Qa(d)?Td[a][b]=n(d):Td[a][b]=d},de=function(a,b){if(Td[a])return Td[a][b]},ee=function(a,b){Td[a]&&delete Td[a][b]};var he=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var ie=/:[0-9]+$/,je=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},me=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ke(a.protocol)||ke(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||E.location.hostname).replace(ie,"").toLowerCase());return le(a,b,c,d,e)},le=function(a,b,c,d,e){var f,h=ke(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=ne(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(ie,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);
f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=qa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=je(f,e,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ke=function(a){return a?a.replace(":","").toLowerCase():""},ne=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},oe=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(ie,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},pe=function(a){function b(m){var q=m.split("=")[0];return 0>d.indexOf(q)?m:q+"=0"}function c(m){return m.split("&").map(b).filter(function(q){return void 0!=q}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
e=oe(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function qe(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var re={},se=function(a){return void 0==re[a]?!1:re[a]};var ue=function(a,b,c,d){return te(d)?qe(a,String(b||document.cookie),c):[]},xe=function(a,b,c,d,e){if(te(e)){var f=ve(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=we(f,function(h){return h.Tb},b);if(1===f.length)return f[0].id;f=we(f,function(h){return h.xb},c);return f[0]?f[0].id:void 0}}};function ye(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=ue(b,f,!1,d).indexOf(c)}
var Ce=function(a,b,c){function d(p,u,w){if(null==w)return delete h[u],p;h[u]=w;return p+"; "+u+"="+w}function e(p,u){if(null==u)return delete h[u],p;h[u]=!0;return p+"; "+u}if(!te(c.Ba))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ze(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Th);f=d(f,"samesite",
c.Yh);c.Zh&&(f=e(f,"secure"));f=e(f,c.flags);var l=c.domain;if("auto"===l){for(var m=Ae(),q=0;q<m.length;++q){var r="none"!==m[q]?m[q]:void 0,t=d(f,"domain",r);if(!Be(r,c.path)&&ye(t,a,b,c.Ba))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));return Be(l,c.path)?1:ye(f,a,b,c.Ba)?0:1},De=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ce(a,b,c)};
function we(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function ve(a,b,c){for(var d=[],e=ue(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Tb:1*l[0]||1,xb:1*l[1]||1}))}}return d}
var ze=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ee=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Fe=/(^|\.)doubleclick\.net$/i,Be=function(a,b){return Fe.test(document.location.hostname)||"/"===b&&Ee.test(a)},Ae=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Fe.test(e)||Ee.test(e)||a.push("none");
return a},te=function(a){if(!se("gtag_cs_api")||!a||!Hc())return!0;if(!Gc(a))return!1;var b=Fc(a);return null==b?!0:!!b};var Ge=function(){for(var a=fc.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=E.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Je=function(a,b,c,d,e){var f=He(b);return xe(a,f,Ie(c),d,e)},Ke=function(a,b,c,d){var e=""+He(c),f=Ie(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},He=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ie=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Le(a,b,c){var d,e=a.vb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Fa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Me=["1"],Ne={},Re=function(a){var b=Oe(a.prefix);Ne[b]||Pe(b,a.path,a.domain)||(Qe(b,Ge(),a),Pe(b,a.path,a.domain))};function Qe(a,b,c){var d=Ke(b,"1",c.domain,c.path),e=Le(c);e.Ba="ad_storage";De(a,d,e)}function Pe(a,b,c){var d=Je(a,b,c,Me,"ad_storage");d&&(Ne[a]=d);return d}function Oe(a){return(a||"_gcl")+"_au"};function Se(){for(var a=Te,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ue(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Te,Ve;function We(a){Te=Te||Ue();Ve=Ve||Se();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,q=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(q=64));b.push(Te[l],Te[m],Te[q],Te[r])}return b.join("")}
function Xe(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),q=Ve[m];if(null!=q)return q;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Te=Te||Ue();Ve=Ve||Se();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Ye;var bf=function(){var a=Ze,b=$e,c=af(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){nc(F,"mousedown",d);nc(F,"keyup",d);nc(F,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},cf=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};af().decorators.push(f)},df=function(a,b,c){for(var d=af().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a,q=!!h.sameHost;if(l&&(q||m!==F.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[r])||q&&0<=l[r].indexOf(m)){k=!0;break a}k=!1}if(k){var t=h.placement;void 0==t&&(t=h.fragment?2:1);t===b&&Ja(e,h.callback())}}return e},af=function(){var a=hc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ef=/(.*?)\*(.*?)\*(.*)/,ff=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,gf=/^(?:www\.|m\.|amp\.)+/,hf=/([^?#]+)(\?[^#]*)?(#.*)?/;function jf(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var lf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(We(String(d))))}var e=b.join("*");return["1",kf(e),e].join("*")},kf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ye)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Ye=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ye[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},nf=function(){return function(a){var b=oe(E.location.href),c=b.search.replace("?",""),d=je(c,"_gl",!0)||"";a.query=mf(d)||{};var e=me(b,"fragment").match(jf("_gl"));a.fragment=mf(e&&e[3]||"")||{}}},of=function(a){var b=nf(),c=af();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ja(d,e.query),a&&Ja(d,e.fragment));return d},mf=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=ef.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],q=0;q<b;++q)if(m===kf(k,q)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)r[t[p]]=Xe(t[p+1]);return r}}}}catch(u){}};
function pf(a,b,c,d){function e(q){var r=q,t=jf(a).exec(r),p=r;if(t){var u=t[2],w=t[4];p=t[1];w&&(p=p+u+w)}q=p;var v=q.charAt(q.length-1);q&&"&"!==v&&(q+="&");return q+m}d=void 0===d?!1:d;var f=hf.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function qf(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=df(b,1,c),e=df(b,2,c),f=df(b,3,c);if(Ka(d)){var h=lf(d);c?rf("_gl",h,a):sf("_gl",h,a,!1)}if(!c&&Ka(e)){var k=lf(e);sf("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,q=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){sf(m,q,r,void 0);break a}if("form"===r.tagName.toLowerCase()){rf(m,q,r);break a}}"string"==typeof r&&pf(m,q,r,void 0)}}
function sf(a,b,c,d){if(c.href){var e=pf(a,b,c.href,void 0===d?!1:d);he.test(e)&&(c.href=e)}}
function rf(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=F.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=pf(a,b,c.action);he.test(m)&&(c.action=m)}}}
var Ze=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||qf(e,e.hostname)}}catch(h){}},$e=function(a){try{if(a.action){var b=me(oe(a.action),"host");qf(a,b)}}catch(c){}},tf=function(a,b,c,d){bf();cf(a,b,"fragment"===c?2:1,!!d,!1)},uf=function(a,b){bf();cf(a,[le(E.location,"host",!0)],b,!0,!0)},vf=function(){var a=F.location.hostname,b=ff.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(gf,""),l=e.replace(gf,""),m;if(!(m=k===l)){var q="."+l;m=k.substring(k.length-q.length,k.length)===q}return m},wf=function(a,b){return!1===a?!1:a||b||vf()};var xf=/^\w+$/,yf=/^[\w-]+$/,zf=/^~?[\w-]+$/,Af={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Bf=function(){if(!se("gtag_cs_api")||!Hc())return!0;var a=Fc("ad_storage");return null==a?!0:!!a},Cf=function(a,b){Gc("ad_storage")?Bf()?a():Kc(a,"ad_storage"):b?I("TAGGING",3):Jc(function(){Cf(a,!0)},["ad_storage"])},Ff=function(a){var b=[];if(!F.cookie)return b;var c=ue(a,F.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Df(c[d]);e&&-1===qa(b,e)&&b.push(e)}return Ef(b)};
function Gf(a){return a&&"string"==typeof a&&a.match(xf)?a:"_gcl"}
var If=function(){var a=oe(E.location.href),b=me(a,"query",!1,void 0,"gclid"),c=me(a,"query",!1,void 0,"gclsrc"),d=me(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||je(e,"gclid",void 0);c=c||je(e,"gclsrc",void 0)}return Hf(b,c,d)},Hf=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(yf))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":se("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Kf=function(a){var b=If();Cf(function(){return Jf(b,a)})};
function Jf(a,b,c){function d(m,q){var r=Lf(m,e);r&&(De(r,q,f),h=!0)}b=b||{};var e=Gf(b.prefix);c=c||Fa();var f=Le(b,c,!0);f.Ba="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.ci?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var Nf=function(a,b){var c=of(!0);Cf(function(){for(var d=Gf(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Af[f]){var h=Lf(f,d),k=c[h];if(k){var l=Math.min(Mf(k),Fa()),m;b:{for(var q=l,r=ue(h,F.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Mf(r[t])>q){m=!0;break b}m=!1}if(!m){var p=Le(b,l,!0);p.Ba="ad_storage";De(h,k,p)}}}}Jf(Hf(c.gclid,c.gclsrc),b)})},Lf=function(a,b){var c=Af[a];if(void 0!==c)return b+c},Mf=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Df(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Of=function(a,b,c,d,e){if(pa(b)){var f=Gf(e),h=function(){for(var k={},l=0;l<a.length;++l){var m=Lf(a[l],f);if(m){var q=ue(m,F.cookie,void 0,"ad_storage");q.length&&(k[m]=q.sort()[q.length-1])}}return k};Cf(function(){tf(h,b,c,d)})}},Ef=function(a){return a.filter(function(b){return zf.test(b)})},Pf=function(a,b){for(var c=Gf(b.prefix),d={},e=0;e<a.length;e++)Af[a[e]]&&(d[a[e]]=Af[a[e]]);Cf(function(){ya(d,function(f,h){var k=ue(c+h,F.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Mf(l),
q={};q[f]=[Df(l)];Jf(q,b,m)}})})};function Qf(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Rf=function(){function a(e,f,h){h&&(e[f]=h)}var b=["aw","dc"];if(Hc()){var c=If();if(Qf(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);uf(function(){return d},3);uf(function(){var e={};return e._up="1",e},1)}}},Sf=function(){var a;if(Bf()){for(var b=[],c=F.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({qd:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].qd]||(h[b[k].qd]=[]),h[b[k].qd].push({timestamp:l[1],xg:l[2]}))}a=h}else a={};return a};var Tf=/^\d+\.fls\.doubleclick\.net$/;function Uf(a,b){Gc(C.o)?Oc(C.o)?a():Qc(a):b?I("GTM",42):Rc(function(){Uf(a,!0)},[C.o])}function Vf(a){var b=oe(E.location.href),c=me(b,"host",!1);if(c&&c.match(Tf)){var d=me(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Wf(a,b,c){if("aw"==a||"dc"==a){var d=Vf("gcl"+a);if(d)return d.split(".")}var e=Gf(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Oc(C.o)&&c,h;h=If()[a]||[];if(0<h.length)return f?["0"]:h}var k=Lf(a,e);return k?Ff(k):[]}
var Xf=function(a){var b=Vf("gac");if(b)return!Oc(C.o)&&a?"0":decodeURIComponent(b);var c=Sf(),d=[];ya(c,function(e,f){for(var h=[],k=0;k<f.length;k++)h.push(f[k].xg);h=Ef(h);h.length&&d.push(e+":"+h.join(","))});return d.join(";")},Yf=function(a,b){var c=If().dc||[];Uf(function(){Re(b);var d=Ne[Oe(b.prefix)],e=!1;if(d&&0<c.length){var f=kd.joined_au=kd.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;tc(l);e=f[h]=
!0}}null==a&&(a=e);if(a&&d){var m=Oe(b.prefix),q=Ne[m];q&&Qe(m,q,b)}})};var Zf=/[A-Z]+/,$f=/\s/,ag=function(a){if(g(a)&&(a=Ea(a),!$f.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Zf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],w:d}}}}},cg=function(a){for(var b={},c=0;c<a.length;++c){var d=ag(a[c]);d&&(b[d.id]=d)}bg(b);var e=[];ya(b,function(f,h){e.push(h)});return e};
function bg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.w[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var dg=function(){var a=!1;return a};var fg=function(a,b,c,d){return(2===eg()||d||"http:"!=E.location.protocol?a:b)+c},eg=function(){var a=kc(),b;if(1===a)a:{var c=pd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var tg=function(a){return Oc(C.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=pe(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var ug=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),vg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},wg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},xg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var zg=function(a){var b=Yd("gtm.whitelist");b&&I("GTM",9);var c=b&&La(Da(b),vg),d=Yd("gtm.blacklist");d||(d=Yd("tagTypeBlacklist"))&&I("GTM",3);d?
I("GTM",8):d=[];yg()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=qa(Da(d),"google")&&I("GTM",2);var e=d&&La(Da(d),wg),f={};return function(h){var k=h&&h[Hb.wa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=vd[k]||[],m=a(k,l);if(b){var q;if(q=m)a:{if(0>qa(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>qa(c,l[r])){I("GTM",11);q=!1;break a}}else{q=!1;break a}q=!0}m=q}var t=!1;if(d){var p=0<=qa(e,k);if(p)t=p;else{var u=xa(e,l||[]);u&&I("GTM",10);t=u}}var w=!m||t;w||!(0<=qa(l,"sandboxedScripts"))||c&&-1!==qa(c,"sandboxedScripts")||(w=xa(e,xg));return f[k]=w}},yg=function(){return ug.test(E.location&&E.location.hostname)};var Bg={ig:function(a,b){b[Hb.Bd]&&"string"===typeof a&&(a=1==b[Hb.Bd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Hb.Dd)&&null===a&&(a=b[Hb.Dd]);b.hasOwnProperty(Hb.Fd)&&void 0===a&&(a=b[Hb.Fd]);b.hasOwnProperty(Hb.Ed)&&!0===a&&(a=b[Hb.Ed]);b.hasOwnProperty(Hb.Cd)&&!1===a&&(a=b[Hb.Cd]);return a}};var Cg={active:!0,isWhitelisted:function(){return!0}},Dg=function(a){var b=kd.zones;!b&&a&&(b=kd.zones=a());return b};var Eg=function(){};var Fg=!1,Gg=0,Hg=[];function Ig(a){if(!Fg){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Fg=!0;for(var e=0;e<Hg.length;e++)G(Hg[e])}Hg.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function Jg(){if(!Fg&&140>Gg){Gg++;try{F.documentElement.doScroll("left"),Ig()}catch(a){E.setTimeout(Jg,50)}}}var Kg=function(a){Fg?a():Hg.push(a)};var Lg={},Mg={},Ng=function(a,b,c,d){if(!Mg[a]||md[b]||"__zone"===b)return-1;var e={};Ta(d)&&(e=n(d,e));e.id=c;e.status="timeout";return Mg[a].tags.push(e)-1},Og=function(a,b,c,d){if(Mg[a]){var e=Mg[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Pg(a){for(var b=Lg[a]||[],c=0;c<b.length;c++)b[c]();Lg[a]={push:function(d){d(jd.s,Mg[a])}}}
var Sg=function(a,b,c){Mg[a]={tags:[]};na(b)&&Qg(a,b);c&&E.setTimeout(function(){return Pg(a)},Number(c));return Rg(a)},Qg=function(a,b){Lg[a]=Lg[a]||[];Lg[a].push(Ia(function(){return G(function(){b(jd.s,Mg[a])})}))};function Rg(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ia(function(){b++;d&&b>=c&&Pg(a)})},Vf:function(){d=!0;b>=c&&Pg(a)}}};var Tg=function(){function a(d){return!oa(d)||0>d?0:d}if(!kd._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=oa(Zd.get("gtm.start"))?Zd.get("gtm.start"):0;kd._li={cst:a(c-b),cbt:a(rd-b)}}};var Xg={},Yg=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},Zg=!1;
var ch=function(a){},bh=function(){return E.GoogleAnalyticsObject||"ga"};function ih(a,b,c,d){var e=ub[a],f=jh(a,b,c,d);if(!f)return null;var h=Cb(e[Hb.Ud],c,[]);if(h&&h.length){var k=h[0];f=ih(k.index,{C:f,B:1===k.se?b.terminate:f,terminate:b.terminate},c,d)}return f}
function jh(a,b,c,d){function e(){if(f[Hb.qf])k();else{var v=Eb(f,c,[]),x=Ng(c.id,String(f[Hb.wa]),Number(f[Hb.Wd]),v[Hb.rf]),y=!1;v.vtp_gtmOnSuccess=function(){if(!y){y=!0;var z=Fa()-B;Rd(c.id,ub[a],"5");Og(c.id,x,"success",z);h()}};v.vtp_gtmOnFailure=function(){if(!y){y=!0;var z=Fa()-B;Rd(c.id,ub[a],"6");Og(c.id,x,"failure",z);k()}};v.vtp_gtmTagId=f.tag_id;
v.vtp_gtmEventId=c.id;Rd(c.id,f,"1");var A=function(){var z=Fa()-B;Rd(c.id,f,"7");Og(c.id,x,"exception",z);y||(y=!0,k())};var B=Fa();try{Bb(v,c)}catch(z){A(z)}}}var f=ub[a],h=b.C,k=b.B,l=b.terminate;if(c.Xc(f))return null;var m=Cb(f[Hb.Xd],c,[]);if(m&&m.length){var q=m[0],r=ih(q.index,{C:h,B:k,terminate:l},c,d);if(!r)return null;h=r;k=2===q.se?l:r}if(f[Hb.Md]||f[Hb.vf]){var t=f[Hb.Md]?vb:c.rh,p=h,u=k;if(!t[a]){e=Ia(e);var w=kh(a,t,e);h=w.C;k=w.B}return function(){t[a](p,u)}}return e}
function kh(a,b,c){var d=[],e=[];b[a]=lh(d,e,c);return{C:function(){b[a]=mh;for(var f=0;f<d.length;f++)d[f]()},B:function(){b[a]=nh;for(var f=0;f<e.length;f++)e[f]()}}}function lh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function mh(a){a()}function nh(a,b){b()};var qh=function(a,b){for(var c=[],d=0;d<ub.length;d++)if(a.wb[d]){var e=ub[d];var f=b.add();try{var h=ih(d,{C:f,B:f,terminate:f},a,d);h?c.push({Ue:d,Oe:Fb(e),sg:h}):(oh(d,a),f())}catch(l){f()}}b.Vf();c.sort(ph);for(var k=0;k<c.length;k++)c[k].sg();return 0<c.length};function ph(a,b){var c,d=b.Oe,e=a.Oe;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ue,k=b.Ue;f=h>k?1:h<k?-1:0}return f}
function oh(a,b){if(!Od)return;var c=function(d){var e=b.Xc(ub[d])?"3":"4",f=Cb(ub[d][Hb.Ud],b,[]);f&&f.length&&c(f[0].index);Rd(b.id,ub[d],e);var h=Cb(ub[d][Hb.Xd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var rh=!1,sh=function(a,b,c,d,e){if("gtm.js"==b){if(rh)return!1;rh=!0}Qd(a,b);var f=Sg(a,d,e);ce(a,"event",1);ce(a,"ecommerce",1);ce(a,"gtm");var h={id:a,name:b,Xc:zg(c),wb:[],rh:[],Fe:function(){I("GTM",6)}};h.wb=Lb(h);var k=qh(h,f);"gtm.js"!==b&&"gtm.sync"!==b||ch(jd.s);if(!k)return k;for(var l=0;l<h.wb.length;l++)if(h.wb[l]){var m=ub[l];if(m&&!md[String(m[Hb.wa])])return!0}return!1};function uh(a,b){}function vh(a,b){return wh()?uh(a,b):void 0}
function wh(){var a=!1;return a};var xh=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.C=function(){};this.B=function(){};this.eventId=void 0},yh=function(a){var b=new xh;b.eventModel=a;return b},zh=function(a,b){a.targetConfig=b;return a},Ah=function(a,b){a.containerConfig=b;return a},Bh=function(a,b){a.h=b;return a},Ch=function(a,b){a.globalConfig=b;return a},Dh=function(a,b){a.C=b;return a},Eh=function(a,b){a.B=b;return a};
xh.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Fh=function(a){function b(e){ya(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];ya(c,function(e){d.push(e)});return d};var Gh;if(3===jd.Nb.length)Gh="g";else{var Hh="G";Gh=Hh}
var Ih={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gh,OPT:"o"},Jh=function(a){var b=jd.s.split("-"),c=b[0].toUpperCase(),d=Ih[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===jd.Nb.length){var h="w";f="2"+h}else f="";return f+d+jd.Nb+e};function Kh(){var a=!1;a=Hc();return a}
function Lh(a,b,c){function d(r){var t;kd.reported_gclid||(kd.reported_gclid={});t=kd.reported_gclid;var p=f+(r?"gcu":"gcs");if(!t[p]){t[p]=!0;var u=[],w=function(B,z){z&&u.push(B+"="+encodeURIComponent(z))},v="https://www.google.com";if(Hc()){var x=Oc(C.o);w("gcs",Pc());r&&w("gcu","1");w("rnd",q);if((!f||h&&"aw.ds"!==h)&&Oc(C.o)){var y=Ff("_gcl_aw");w("gclaw",y.join("."))}w("url",String(E.location).split(/[?#]/)[0]);w("dclid",Mh(b,k));!x&&b&&(v="https://pagead2.googlesyndication.com")}
w("gclid",Mh(b,f));w("gclsrc",h);w("gtm",Jh(!c));var A=v+"/pagead/landing?"+u.join("&");tc(A)}}var e=If(),f=e.gclid||"",h=e.gclsrc,k=e.dclid||"",l=!a&&(!f||h&&"aw.ds"!==h?!1:!0),m=Kh();if(l||m){var q=""+Ge();m?Rc(function(){d();Oc(C.o)||Qc(function(){return d(!0)})},[C.o]):d()}}
function Mh(a,b){var c=a&&!Oc(C.o);if(b&&c)return"0";return b}var Pi={},Qi=["G","GP"];Pi.We="";var Ri=Pi.We.split(",");function Si(){var a=kd;return a.gcq=a.gcq||new Ti}
var Ui=function(a,b,c){Si().register(a,b,c)},Vi=function(a,b,c,d){Si().push("event",[b,a],c,d)},Wi=function(a,b){Si().push("config",[a],b)},Xi={},Yi=function(a){return!0},Zi=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},$i=function(a,b,c,d,e){this.type=a;this.m=b;this.aa=c||
"";this.h=d;this.i=e},Ti=function(){this.m={};this.i={};this.h=[]},aj=function(a,b){var c=ag(b);return a.m[c.containerId]=a.m[c.containerId]||new Zi},bj=function(a,b,c){if(b){var d=ag(b);if(d&&1===aj(a,b).status&&Yi(d.prefix)){aj(a,b).status=2;var e={};Od&&(e.timeoutId=E.setTimeout(function(){I("GTM",38);Ad()},3E3));a.push("require",[e],d.containerId);Xi[d.containerId]=Fa();if(dg()){}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=E.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=vh(c,h)||k;jc(l)}}}},cj=function(a,b,c,d){if(d.aa){var e=aj(a,d.aa),
f=e.m;if(f){var h=n(c),k=n(e.targetConfig[d.aa]),l=n(e.containerConfig),m=n(e.i),q=n(a.i),r=Yd("gtm.uniqueEventId"),t=ag(d.aa).prefix,p=Eh(Dh(Ch(Bh(Ah(zh(yh(h),k),l),m),q),function(){Sd(r,t,"2");}),function(){Sd(r,t,"3");});try{Sd(r,t,"1");f(d.aa,b,d.m,p)}catch(u){
Sd(r,t,"4");}}}};
Ti.prototype.register=function(a,b,c){if(3!==aj(this,a).status){aj(this,a).m=b;aj(this,a).status=3;c&&(aj(this,a).i=c);var d=ag(a),e=Xi[d.containerId];if(void 0!==e){var f=kd[d.containerId].bootstrap,h=d.prefix.toUpperCase();kd[d.containerId]._spx&&(h=h.toLowerCase());var k=Yd("gtm.uniqueEventId"),l=h,m=Fa()-f;if(Od&&!Fd[k]){k!==Bd&&(zd(),Bd=k);var q=l+"."+Math.floor(f-e)+"."+Math.floor(m);Kd=Kd?Kd+","+q:"&cl="+q}delete Xi[d.containerId]}this.flush()}};
Ti.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);bj(this,c,b[0][C.sa]||this.i[C.sa]);this.h.push(new $i(a,e,c,b,d));d||this.flush()};
Ti.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==aj(this,c.aa).status&&!a)return;Od&&E.clearTimeout(c.h[0].timeoutId);break;case "set":ya(c.h[0],function(l,m){n(Ma(l,m),b.i)});break;case "config":var d=c.h[0],e=!!d[C.fc];delete d[C.fc];var f=aj(this,c.aa),h=ag(c.aa),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.aa]={});f.h&&e||cj(this,C.H,d,c);f.h=!0;delete d[C.$a];k?n(d,f.containerConfig):
n(d,f.targetConfig[c.aa]);break;case "event":cj(this,c.h[1],c.h[0],c)}this.h.shift()}};var dj=["HA","GF","GP","G"],ej="G".split(/,/);ej.push("DC");ej.push("UA");ej.push("AW");var fj=!1;
fj=!0;var gj=null,hj={},ij={},jj;function kj(a,b){var c={event:a};b&&(c.eventModel=n(b),b[C.zc]&&(c.eventCallback=b[C.zc]),b[C.Ib]&&(c.eventTimeout=b[C.Ib]));return c}
var pj={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ta(a[2])&&void 0!=a[2])return;c=a[2]}var d=kj(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ta(a[1])?b=n(a[1]):3==a.length&&g(a[1])&&(b={},
Ta(a[2])||pa(a[2])?b[a[1]]=n(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var qj={policy:!0};var rj=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},tj=function(a){var b=sj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var uj=!1,vj=[];function wj(){if(!uj){uj=!0;for(var a=0;a<vj.length;a++)G(vj[a])}}var xj=function(a){uj?G(a):vj.push(a)};var Pj=function(a){if(Oj(a))return a;this.h=a};Pj.prototype.Bg=function(){return this.h};var Oj=function(a){return!a||"object"!==Qa(a)||Ta(a)?!1:"getUntrustedUpdateValue"in a};Pj.prototype.getUntrustedUpdateValue=Pj.prototype.Bg;var Qj=[],Rj=!1,Sj=function(a){return E["dataLayer"].push(a)},Tj=function(a){var b=kd["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Uj(a){var b=a._clear;ya(a,function(f,h){"_clear"!==f&&(b&&be(f,void 0),be(f,h))});qd||(qd=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=wd(),a["gtm.uniqueEventId"]=d,be("gtm.uniqueEventId",d));sd=c;var e=Vj(a);sd=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}
function Vj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=kd.zones;d=e?e.checkState(jd.s,c):Cg;return d.active?sh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Wj(){for(var a=!1;!Rj&&0<Qj.length;){Rj=!0;delete Vd.eventModel;Xd();var b=Qj.shift();if(null!=b){var c=Oj(b);if(c){var d=b;b=Oj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Yd(h,1);if(pa(k)||Ta(k))k=n(k);Wd[h]=k}}try{if(na(b))try{b.call(Zd)}catch(w){}else if(pa(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),q=m.pop(),r=l.slice(1),t=Yd(m.join("."),2);if(void 0!==t&&null!==t)try{t[q].apply(t,r)}catch(w){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var u=pj[b[0]];if(u&&(!c||!qj[b[0]])){b=u(b);break a}}b=void 0}if(!b){Rj=!1;continue}}a=Uj(b)||a}}finally{c&&Xd(!0)}}Rj=!1}
return!a}function Xj(){var a=Wj();try{rj(E["dataLayer"],jd.s)}catch(b){}return a}
var Zj=function(){var a=hc("dataLayer",[]),b=hc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Kg(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});xj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<kd.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Pj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Qj.push.apply(Qj,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Wj()&&h};Qj.push.apply(Qj,a.slice(0));Yj()&&G(Xj)},Yj=function(){var a=!0;return a};var ak={};ak.Jb=new String("undefined");
var bk=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ak.Jb?b:a[d]);return c.join("")}};bk.prototype.toString=function(){return this.h("undefined")};bk.prototype.valueOf=bk.prototype.toString;ak.Ef=bk;ak.Ic={};ak.lg=function(a){return new bk(a)};var ck={};ak.jh=function(a,b){var c=wd();ck[c]=[a,b];return c};ak.ne=function(a){var b=a?0:1;return function(c){var d=ck[c];if(d&&"function"===typeof d[b])d[b]();ck[c]=void 0}};ak.Jg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};ak.$g=function(a){if(a===ak.Jb)return a;var b=wd();ak.Ic[b]=a;return'google_tag_manager["'+jd.s+'"].macro('+b+")"};ak.Tg=function(a,b,c){a instanceof ak.Ef&&(a=a.h(ak.jh(b,c)),b=ma);return{Vc:a,C:b}};var dk=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||pc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},ek=function(a){kd.hasOwnProperty("autoEventsSettings")||(kd.autoEventsSettings={});var b=kd.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},fk=function(a,b,c){ek(a)[b]=c},gk=function(a,b,c,d){var e=ek(a),f=Ha(e,b,d);e[b]=c(f)},hk=function(a,b,c){var d=ek(a);return Ha(d,b,c)};var ik=["input","select","textarea"],jk=["button","hidden","image","reset","submit"],kk=function(a){var b=a.tagName.toLowerCase();return!sa(ik,function(c){return c===b})||"input"===b&&sa(jk,function(c){return c===a.type.toLowerCase()})?!1:!0},lk=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):sc(a,["form"],100)},mk=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(kk(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var nk=!!E.MutationObserver,ok=void 0,pk=function(a){if(!ok){var b=function(){var c=F.body;if(c)if(nk)(new MutationObserver(function(){for(var e=0;e<ok.length;e++)G(ok[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;nc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<ok.length;e++)G(ok[e])}))})}};ok=[];F.body?b():G(b)}ok.push(a)};var Kk=E.clearTimeout,Lk=E.setTimeout,K=function(a,b,c){if(dg()){b&&G(b)}else return jc(a,b,c)},Mk=function(){return E.location.href},Nk=function(a){return me(oe(a),"fragment")},Ok=function(a){return ne(oe(a))},Q=function(a,b){return Yd(a,b||2)},Pk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Sj(a)):d=Sj(a);return d},Qk=function(a,b){E[a]=b},R=function(a,b,c){b&&(void 0===E[a]||c&&!E[a])&&(E[a]=
b);return E[a]},Rk=function(a,b,c){return ue(a,b,void 0===c?!0:!!c)},Sk=function(a,b){if(dg()){b&&G(b)}else lc(a,b)},Tk=function(a){return!!hk(a,"init",!1)},Uk=function(a){fk(a,"init",!0)},Vk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":pd;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";K(fg("https://","http://",c))},Wk=function(a,b){var c=a[b];return c};var Xk=ak.Tg;function tl(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var ul=new wa;function vl(a,b){function c(h){var k=oe(h),l=me(k,"protocol"),m=me(k,"host",!0),q=me(k,"port"),r=me(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==q||"https"==l&&"443"==q)l="web",q="default";return[l,m,q,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function wl(a){return xl(a)?1:0}
function xl(a){var b=a.arg0,c=a.arg1;if(a.any_of&&pa(c)){for(var d=0;d<c.length;d++)if(wl({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return tl(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=qa(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var q=String(c)+m,r=ul.get(q);r||(r=new RegExp(c,m),ul.set(q,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return vl(b,c)}return!1};var yl=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var zl={},Al=encodeURI,V=encodeURIComponent,Bl=mc;var Cl=function(a,b){if(!a)return!1;var c=me(oe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Dl=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};zl.Kg=function(){var a=!1;return a};function Vm(){return E.gaGlobal=E.gaGlobal||{}}var Wm=function(){var a=Vm();a.hid=a.hid||va();return a.hid};var gn=window,hn=document,jn=function(a){var b=gn._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===gn["ga-disable-"+a])return!0;try{var c=gn.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=qe("AMP_TOKEN",String(hn.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return hn.getElementById("__gaOptOutExtension")?!0:!1};function mn(a,b){delete b.eventModel[C.$a];if(a!==C.H){var c=b.getWithConfig(C.ac);if(pa(c)){I("GTM",26);for(var d={},e=0;e<c.length;e++){var f=c[e],h=b.getWithConfig(f);void 0!==h&&(d[f]=h)}b.eventModel=d}}on(b.eventModel)}var on=function(a){ya(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[C.ja]||{};ya(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var rn=function(a,b,c){Vi(b,c,a)},sn=function(a,b,c){Vi(b,c,a,!0)},un=function(a,b){};
function tn(a,b){}var W={a:{}};


W.a.jsm=["customScripts"],function(){(function(a){W.__jsm=a;W.__jsm.b="jsm";W.__jsm.g=!0;W.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=R("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
W.a.e=["google"],function(){(function(a){W.__e=a;W.__e.b="e";W.__e.g=!0;W.__e.priorityOverride=0})(function(a){return String(de(a.vtp_gtmEventId,"event"))})}();
W.a.f=["google"],function(){(function(a){W.__f=a;W.__f.b="f";W.__f.g=!0;W.__f.priorityOverride=0})(function(a){var b=Q("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?me(oe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Ok(String(b)):String(b)})}();
W.a.j=["google"],function(){(function(a){W.__j=a;W.__j.b="j";W.__j.g=!0;W.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=R(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();W.a.k=["google"],function(){(function(a){W.__k=a;W.__k.b="k";W.__k.g=!0;W.__k.priorityOverride=0})(function(a){return Rk(a.vtp_name,Q("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

W.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){W.__u=b;W.__u.b="u";W.__u.g=!0;W.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Q("gtm.url",1);c=c||Mk();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ok(String(c));var e=oe(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?pa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var q=0;q<m.length;q++){var r=me(e,"QUERY",void 0,void 0,m[q]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=me(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
W.a.v=["google"],function(){(function(a){W.__v=a;W.__v.b="v";W.__v.g=!0;W.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Q(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();






W.a.aev=["google"],function(){function a(p,u){var w=de(p,"gtm");if(w)return w[u]}function b(p,u,w,v){v||(v="element");var x=p+"."+u,y;if(q.hasOwnProperty(x))y=q[x];else{var A=a(p,v);if(A&&(y=w(A),q[x]=y,r.push(x),35<r.length)){var B=r.shift();delete q[B]}}return y}function c(p,u,w){var v=a(p,t[u]);return void 0!==v?v:w}function d(p,u){if(!p)return!1;var w=e(Mk());pa(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var v=[w],x=0;x<u.length;x++)if(u[x]instanceof RegExp){if(u[x].test(p))return!1}else{var y=
u[x];if(0!=y.length){if(0<=e(p).indexOf(y))return!1;v.push(e(y))}}return!Cl(p,v)}function e(p){m.test(p)||(p="http://"+p);return me(oe(p),"HOST",!0)}function f(p,u,w){switch(p){case "SUBMIT_TEXT":return b(u,"FORM."+p,h,"formSubmitElement")||w;case "LENGTH":var v=b(u,"FORM."+p,k);return void 0===v?w:v;case "INTERACTED_FIELD_ID":return l(u,"id",w);case "INTERACTED_FIELD_NAME":return l(u,"name",w);case "INTERACTED_FIELD_TYPE":return l(u,"type",w);case "INTERACTED_FIELD_POSITION":var x=a(u,"interactedFormFieldPosition");
return void 0===x?w:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,"interactSequenceNumber");return void 0===y?w:y;default:return w}}function h(p){switch(p.tagName.toLowerCase()){case "input":return pc(p,"value");case "button":return qc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var u=0,w=0;w<p.elements.length;w++)kk(p.elements[w])&&u++;return u}}function l(p,u,w){var v=a(p,"interactedFormField");return v&&pc(v,u)||w}var m=/^https?:\/\//i,q={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){W.__aev=p;W.__aev.b="aev";W.__aev.g=!0;W.__aev.priorityOverride=0})(function(p){var u=p.vtp_gtmEventId,w=p.vtp_defaultValue,v=p.vtp_varType;switch(v){case "TAG_NAME":var x=a(u,"element");return x&&x.tagName||
w;case "TEXT":return b(u,v,qc)||w;case "URL":var y;a:{var A=String(a(u,"elementUrl")||w||""),B=oe(A),z=String(p.vtp_component||"URL");switch(z){case "URL":y=A;break a;case "IS_OUTBOUND":y=d(A,p.vtp_affiliatedDomains);break a;default:y=me(B,z,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return y;case "ATTRIBUTE":var D;if(void 0===p.vtp_attribute)D=c(u,v,w);else{var H=p.vtp_attribute,M=a(u,"element");D=M&&pc(M,H)||w||""}return D;case "MD":var N=p.vtp_mdValue,Z=b(u,"MD",wk);return N&&Z?zk(Z,N)||
w:Z||w;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),u,w);default:return c(u,v,w)}})}();






W.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var q=k.getAttribute("data-gtmsrc");q&&(m.src=q,ic(m,l));d.insertBefore(m,null);q||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){G(h)}}}var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,f=Xk(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Vc,k=f.C;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,rc(h),k,e)()}else Lk(function(){c(d)},
200)};W.__html=c;W.__html.b="html";W.__html.g=!0;W.__html.priorityOverride=0}();








var vn={};vn.macro=function(a){if(ak.Ic.hasOwnProperty(a))return ak.Ic[a]},vn.onHtmlSuccess=ak.ne(!0),vn.onHtmlFailure=ak.ne(!1);vn.dataLayer=Zd;vn.callback=function(a){ud.hasOwnProperty(a)&&na(ud[a])&&ud[a]();delete ud[a]};function wn(){kd[jd.s]=vn;Ja(vd,W.a);yb=yb||ak;zb=Bg}
function xn(){re.gtm_3pds=!0;kd=E.google_tag_manager=E.google_tag_manager||{};if(kd[jd.s]){var a=kd.zones;a&&a.unregisterChild(jd.s);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)rb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)ub.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)tb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var q=l[m],r={},t=0;t<q.length;t++)r[q[t][0]]=Array.prototype.slice.call(q[t],1);sb.push(r)}wb=W;xb=wl;wn();Zj();Fg=!1;Gg=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)Ig();
else{nc(F,"DOMContentLoaded",Ig);nc(F,"readystatechange",Ig);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!E.frameElement}catch(x){}p&&Jg()}nc(E,"load",Ig)}uj=!1;"complete"===F.readyState?wj():nc(E,"load",wj);a:{if(!Od)break a;E.setInterval(Pd,
864E5);}rd=(new Date).getTime();}}
(function(a){a()})(xn);

})()
