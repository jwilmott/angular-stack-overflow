(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{OguN:function(t,e,i){"use strict";i.r(e);var n=i("CcnG"),a=i("A5NP"),r=i("psW0"),l=function(){function t(t,e){this.route=t,this.questionsService=e}return t.prototype.ngOnInit=function(){var t=this;this.question$=this.route.params.pipe(Object(r.a)(function(e){return t.questionsService.getQuestion(e.id)}))},t}(),o=function(){return function(){}}(),s=i("pMnS"),c=i("ZYCi"),u=i("mrSG"),p=i("n6gG"),h=i("YSh2"),d=i("Wf4p"),b=i("K9Ia"),m=i("p0ib"),f=i("t9fZ"),g=i("ny24"),_=i("p0Sj"),y=i("lLAP"),x=i("YlbQ"),v=function(){return function(t){this._elementRef=t}}(),C=["mat-basic-chip"],w=function(t){function e(e,i,a,r){var l=t.call(this,e)||this;return l._elementRef=e,l._ngZone=i,l._hasFocus=!1,l.chipListSelectable=!0,l._chipListMultiple=!1,l._selected=!1,l._selectable=!0,l._removable=!0,l._onFocus=new b.a,l._onBlur=new b.a,l.selectionChange=new n.n,l.destroyed=new n.n,l.removed=new n.n,l._addHostClassName(),l._chipRipple=new d.h(l,i,e,a),l._chipRipple.setupTriggerEvents(e.nativeElement),l.rippleConfig=r||{},l}return Object(u.c)(e,t),Object.defineProperty(e.prototype,"rippleDisabled",{get:function(){return this.disabled||this.disableRipple||!!this.rippleConfig.disabled},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selected",{get:function(){return this._selected},set:function(t){var e=Object(p.b)(t);e!==this._selected&&(this._selected=e,this._dispatchSelectionChange())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return null!=this._value?this._value:this._elementRef.nativeElement.textContent},set:function(t){this._value=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectable",{get:function(){return this._selectable&&this.chipListSelectable},set:function(t){this._selectable=Object(p.b)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"removable",{get:function(){return this._removable},set:function(t){this._removable=Object(p.b)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ariaSelected",{get:function(){return this.selectable&&(this._chipListMultiple||this.selected)?this.selected.toString():null},enumerable:!0,configurable:!0}),e.prototype._addHostClassName=function(){for(var t=0,e=C;t<e.length;t++){var i=e[t];if(this._elementRef.nativeElement.hasAttribute(i)||this._elementRef.nativeElement.tagName.toLowerCase()===i)return void this._elementRef.nativeElement.classList.add(i)}this._elementRef.nativeElement.classList.add("mat-standard-chip")},e.prototype.ngOnDestroy=function(){this.destroyed.emit({chip:this}),this._chipRipple._removeTriggerEvents()},e.prototype.select=function(){this._selected||(this._selected=!0,this._dispatchSelectionChange())},e.prototype.deselect=function(){this._selected&&(this._selected=!1,this._dispatchSelectionChange())},e.prototype.selectViaInteraction=function(){this._selected||(this._selected=!0,this._dispatchSelectionChange(!0))},e.prototype.toggleSelected=function(t){return void 0===t&&(t=!1),this._selected=!this.selected,this._dispatchSelectionChange(t),this.selected},e.prototype.focus=function(){this._hasFocus||(this._elementRef.nativeElement.focus(),this._onFocus.next({chip:this})),this._hasFocus=!0},e.prototype.remove=function(){this.removable&&this.removed.emit({chip:this})},e.prototype._handleClick=function(t){this.disabled?t.preventDefault():t.stopPropagation()},e.prototype._handleKeydown=function(t){if(!this.disabled)switch(t.keyCode){case h.c:case h.b:this.remove(),t.preventDefault();break;case h.k:this.selectable&&this.toggleSelected(!0),t.preventDefault()}},e.prototype._blur=function(){var t=this;this._ngZone.onStable.asObservable().pipe(Object(f.a)(1)).subscribe(function(){t._ngZone.run(function(){t._hasFocus=!1,t._onBlur.next({chip:t})})})},e.prototype._dispatchSelectionChange=function(t){void 0===t&&(t=!1),this.selectionChange.emit({source:this,isUserInput:t,selected:this._selected})},e}(Object(d.i)(Object(d.j)(Object(d.k)(v)),"primary")),I=new n.q("mat-chips-default-options"),S=function(){return function(t,e,i,n){this._defaultErrorStateMatcher=t,this._parentForm=e,this._parentFormGroup=i,this.ngControl=n}}(),k=Object(d.l)(S),O=0,j=function(){return function(t,e){this.source=t,this.value=e}}(),B=function(t){function e(e,i,a,r,l,o,s){var c=t.call(this,o,r,l,s)||this;return c._elementRef=e,c._changeDetectorRef=i,c._dir=a,c.ngControl=s,c.controlType="mat-chip-list",c._lastDestroyedChipIndex=null,c._destroyed=new b.a,c._uid="mat-chip-list-"+O++,c._tabIndex=0,c._userTabIndex=null,c._onTouched=function(){},c._onChange=function(){},c._multiple=!1,c._compareWith=function(t,e){return t===e},c._required=!1,c._disabled=!1,c.ariaOrientation="horizontal",c._selectable=!0,c.change=new n.n,c.valueChange=new n.n,c.ngControl&&(c.ngControl.valueAccessor=c),c}return Object(u.c)(e,t),Object.defineProperty(e.prototype,"selected",{get:function(){return this.multiple?this._selectionModel.selected:this._selectionModel.selected[0]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"role",{get:function(){return this.empty?null:"listbox"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"multiple",{get:function(){return this._multiple},set:function(t){this._multiple=Object(p.b)(t),this._syncChipsState()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"compareWith",{get:function(){return this._compareWith},set:function(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(t){this.writeValue(t),this._value=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._chipInput?this._chipInput.id:this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this._required},set:function(t){this._required=Object(p.b)(t),this.stateChanges.next()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"placeholder",{get:function(){return this._chipInput?this._chipInput.placeholder:this._placeholder},set:function(t){this._placeholder=t,this.stateChanges.next()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"focused",{get:function(){return this._chipInput&&this._chipInput.focused||this._hasFocusedChip()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"empty",{get:function(){return(!this._chipInput||this._chipInput.empty)&&0===this.chips.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldLabelFloat",{get:function(){return!this.empty||this.focused},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.ngControl?!!this.ngControl.disabled:this._disabled},set:function(t){this._disabled=Object(p.b)(t),this._syncChipsState()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectable",{get:function(){return this._selectable},set:function(t){var e=this;this._selectable=Object(p.b)(t),this.chips&&this.chips.forEach(function(t){return t.chipListSelectable=e._selectable})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tabIndex",{set:function(t){this._userTabIndex=t,this._tabIndex=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"chipSelectionChanges",{get:function(){return m.a.apply(void 0,this.chips.map(function(t){return t.selectionChange}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"chipFocusChanges",{get:function(){return m.a.apply(void 0,this.chips.map(function(t){return t._onFocus}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"chipBlurChanges",{get:function(){return m.a.apply(void 0,this.chips.map(function(t){return t._onBlur}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"chipRemoveChanges",{get:function(){return m.a.apply(void 0,this.chips.map(function(t){return t.destroyed}))},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentInit=function(){var t=this;this._keyManager=new y.a(this.chips).withWrap().withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr"),this._dir&&this._dir.change.pipe(Object(g.a)(this._destroyed)).subscribe(function(e){return t._keyManager.withHorizontalOrientation(e)}),this._keyManager.tabOut.pipe(Object(g.a)(this._destroyed)).subscribe(function(){t._tabIndex=-1,setTimeout(function(){t._tabIndex=t._userTabIndex||0,t._changeDetectorRef.markForCheck()})}),this.chips.changes.pipe(Object(_.a)(null),Object(g.a)(this._destroyed)).subscribe(function(){t.disabled&&Promise.resolve().then(function(){t._syncChipsState()}),t._resetChips(),t._initializeSelection(),t._updateTabIndex(),t._updateFocusForDestroyedChips(),t.stateChanges.next()})},e.prototype.ngOnInit=function(){this._selectionModel=new x.b(this.multiple,void 0,!1),this.stateChanges.next()},e.prototype.ngDoCheck=function(){this.ngControl&&this.updateErrorState()},e.prototype.ngOnDestroy=function(){this._destroyed.next(),this._destroyed.complete(),this.stateChanges.complete(),this._dropSubscriptions()},e.prototype.registerInput=function(t){this._chipInput=t},e.prototype.setDescribedByIds=function(t){this._ariaDescribedby=t.join(" ")},e.prototype.writeValue=function(t){this.chips&&this._setSelectionByValue(t,!1)},e.prototype.registerOnChange=function(t){this._onChange=t},e.prototype.registerOnTouched=function(t){this._onTouched=t},e.prototype.setDisabledState=function(t){this.disabled=t,this.stateChanges.next()},e.prototype.onContainerClick=function(t){this._originatesFromChip(t)||this.focus()},e.prototype.focus=function(){this.disabled||this._chipInput&&this._chipInput.focused||(this.chips.length>0?(this._keyManager.setFirstItemActive(),this.stateChanges.next()):(this._focusInput(),this.stateChanges.next()))},e.prototype._focusInput=function(){this._chipInput&&this._chipInput.focus()},e.prototype._keydown=function(t){var e=t.target;t.keyCode===h.b&&this._isInputEmpty(e)?(this._keyManager.setLastItemActive(),t.preventDefault()):e&&e.classList.contains("mat-chip")&&(t.keyCode===h.g?(this._keyManager.setFirstItemActive(),t.preventDefault()):t.keyCode===h.e?(this._keyManager.setLastItemActive(),t.preventDefault()):this._keyManager.onKeydown(t),this.stateChanges.next())},e.prototype._updateTabIndex=function(){this._tabIndex=this._userTabIndex||(0===this.chips.length?-1:0)},e.prototype._updateFocusForDestroyedChips=function(){if(null!=this._lastDestroyedChipIndex&&this.chips.length){var t=Math.min(this._lastDestroyedChipIndex,this.chips.length-1);this._keyManager.setActiveItem(t)}this._lastDestroyedChipIndex=null},e.prototype._isValidIndex=function(t){return t>=0&&t<this.chips.length},e.prototype._isInputEmpty=function(t){return!(!t||"input"!==t.nodeName.toLowerCase()||t.value)},e.prototype._setSelectionByValue=function(t,e){var i=this;if(void 0===e&&(e=!0),this._clearSelection(),this.chips.forEach(function(t){return t.deselect()}),Array.isArray(t))t.forEach(function(t){return i._selectValue(t,e)}),this._sortValues();else{var n=this._selectValue(t,e);n&&e&&this._keyManager.setActiveItem(n)}},e.prototype._selectValue=function(t,e){var i=this;void 0===e&&(e=!0);var n=this.chips.find(function(e){return null!=e.value&&i._compareWith(e.value,t)});return n&&(e?n.selectViaInteraction():n.select(),this._selectionModel.select(n)),n},e.prototype._initializeSelection=function(){var t=this;Promise.resolve().then(function(){(t.ngControl||t._value)&&(t._setSelectionByValue(t.ngControl?t.ngControl.value:t._value,!1),t.stateChanges.next())})},e.prototype._clearSelection=function(t){this._selectionModel.clear(),this.chips.forEach(function(e){e!==t&&e.deselect()}),this.stateChanges.next()},e.prototype._sortValues=function(){var t=this;this._multiple&&(this._selectionModel.clear(),this.chips.forEach(function(e){e.selected&&t._selectionModel.select(e)}),this.stateChanges.next())},e.prototype._propagateChanges=function(t){var e;e=Array.isArray(this.selected)?this.selected.map(function(t){return t.value}):this.selected?this.selected.value:t,this._value=e,this.change.emit(new j(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()},e.prototype._blur=function(){var t=this;this._hasFocusedChip()||this._keyManager.setActiveItem(-1),this.disabled||(this._chipInput?setTimeout(function(){t.focused||t._markAsTouched()}):this._markAsTouched())},e.prototype._markAsTouched=function(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()},e.prototype._resetChips=function(){this._dropSubscriptions(),this._listenToChipsFocus(),this._listenToChipsSelection(),this._listenToChipsRemoved()},e.prototype._dropSubscriptions=function(){this._chipFocusSubscription&&(this._chipFocusSubscription.unsubscribe(),this._chipFocusSubscription=null),this._chipBlurSubscription&&(this._chipBlurSubscription.unsubscribe(),this._chipBlurSubscription=null),this._chipSelectionSubscription&&(this._chipSelectionSubscription.unsubscribe(),this._chipSelectionSubscription=null),this._chipRemoveSubscription&&(this._chipRemoveSubscription.unsubscribe(),this._chipRemoveSubscription=null)},e.prototype._listenToChipsSelection=function(){var t=this;this._chipSelectionSubscription=this.chipSelectionChanges.subscribe(function(e){e.source.selected?t._selectionModel.select(e.source):t._selectionModel.deselect(e.source),t.multiple||t.chips.forEach(function(e){!t._selectionModel.isSelected(e)&&e.selected&&e.deselect()}),e.isUserInput&&t._propagateChanges()})},e.prototype._listenToChipsFocus=function(){var t=this;this._chipFocusSubscription=this.chipFocusChanges.subscribe(function(e){var i=t.chips.toArray().indexOf(e.chip);t._isValidIndex(i)&&t._keyManager.updateActiveItemIndex(i),t.stateChanges.next()}),this._chipBlurSubscription=this.chipBlurChanges.subscribe(function(){t._blur(),t.stateChanges.next()})},e.prototype._listenToChipsRemoved=function(){var t=this;this._chipRemoveSubscription=this.chipRemoveChanges.subscribe(function(e){var i=e.chip,n=t.chips.toArray().indexOf(e.chip);t._isValidIndex(n)&&i._hasFocus&&(t._lastDestroyedChipIndex=n)})},e.prototype._originatesFromChip=function(t){for(var e=t.target;e&&e!==this._elementRef.nativeElement;){if(e.classList.contains("mat-chip"))return!0;e=e.parentElement}return!1},e.prototype._hasFocusedChip=function(){return this.chips.some(function(t){return t._hasFocus})},e.prototype._syncChipsState=function(){var t=this;this.chips&&this.chips.forEach(function(e){e.disabled=t._disabled,e._chipListMultiple=t.multiple})},e}(k),F=function(){return function(){}}(),L=i("dWZg"),A=function(){return function(){}}(),P=function(){return function(){}}(),q=function(){return function(){}}(),z=function(){return function(){}}(),M=function(){return function(){}}(),D=function(){return function(){}}(),R=i("Fzqc"),T=i("ZYjt"),E=n.pb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px 0}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}});function V(t){return n.Lb(2,[n.Ab(null,0),n.Ab(null,1)],null,null)}var H=n.pb({encapsulation:2,styles:[],data:{}});function N(t){return n.Lb(2,[n.Ab(null,0),(t()(),n.rb(1,0,null,null,1,"div",[["class","mat-card-header-text"]],null,null,null,null,null)),n.Ab(null,1),n.Ab(null,2)],null,null)}var W=i("seP3"),G=i("gIcY"),K=n.pb({encapsulation:2,styles:[".mat-chip{position:relative;overflow:hidden;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0)}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:'';pointer-events:none;transition:opacity .2s cubic-bezier(.35,0,.25,1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:0}.mat-standard-chip:focus::after{opacity:.16}@media (-ms-high-contrast:active){.mat-standard-chip{outline:solid 1px}.mat-standard-chip:focus{outline:dotted 2px}}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper .mat-standard-chip,.mat-chip-list-wrapper input.mat-input-element{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}"],data:{}});function Z(t){return n.Lb(2,[(t()(),n.rb(0,0,null,null,1,"div",[["class","mat-chip-list-wrapper"]],null,null,null,null,null)),n.Ab(null,0)],null,null)}var J=i("21Lb"),Q=i("OzfB"),Y=i("Ip0R"),$=function(){function t(t){this.sanitized=t}return t.prototype.transform=function(t){return this.sanitized.bypassSecurityTrustHtml(t)},t}(),U=n.pb({encapsulation:0,styles:[[".mat-card[_ngcontent-%COMP%]{width:600px}.mat-card-content[_ngcontent-%COMP%]{margin-top:20px;overflow-x:scroll}.mat-chip[_ngcontent-%COMP%]{cursor:pointer}"]],data:{}});function X(t){return n.Lb(0,[(t()(),n.rb(0,0,null,null,8,"mat-chip",[["class","mat-chip mat-chip"],["role","option"],["title","Search questions by tag"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(t,e,i){var a=!0;return"click"===e&&(a=!1!==n.Bb(t,1).onClick()&&a),"click"===e&&(a=!1!==n.Bb(t,4)._handleClick(i)&&a),"keydown"===e&&(a=!1!==n.Bb(t,4)._handleKeydown(i)&&a),"focus"===e&&(a=!1!==n.Bb(t,4).focus()&&a),"blur"===e&&(a=!1!==n.Bb(t,4)._blur()&&a),a},null,null)),n.qb(1,16384,null,0,c.l,[c.k,c.a,[8,null],n.F,n.k],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),n.Eb(2,{tag:0}),n.Cb(3,1),n.qb(4,147456,[[1,4]],3,w,[n.k,n.A,L.a,[2,d.d]],null,null),n.Hb(335544320,2,{avatar:0}),n.Hb(335544320,3,{trailingIcon:0}),n.Hb(335544320,4,{removeIcon:0}),(t()(),n.Jb(8,null,[""," "]))],function(t,e){var i=t(e,2,0,e.context.$implicit),n=t(e,3,0,"/");t(e,1,0,i,n)},function(t,e){t(e,0,0,n.Bb(e,4).disabled?null:-1,n.Bb(e,4).selected,n.Bb(e,4).avatar,n.Bb(e,4).trailingIcon||n.Bb(e,4).removeIcon,n.Bb(e,4).disabled,n.Bb(e,4).disabled||null,n.Bb(e,4).disabled.toString(),n.Bb(e,4).ariaSelected),t(e,8,0,e.context.$implicit)})}function tt(t){return n.Lb(0,[(t()(),n.rb(0,0,null,null,28,"mat-card",[["class","mat-card mat-card"]],null,null,null,V,E)),n.qb(1,49152,null,0,z,[],null,null),(t()(),n.rb(2,0,null,0,15,"mat-card-header",[["class","mat-card-header"]],null,null,null,N,H)),n.qb(3,49152,null,0,M,[],null,null),(t()(),n.rb(4,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),n.qb(5,16384,null,0,P,[],null,null),(t()(),n.Jb(6,null,["",""])),(t()(),n.rb(7,0,null,1,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),n.qb(8,16384,null,0,q,[],null,null),(t()(),n.Jb(9,null,["Author: ",""])),(t()(),n.rb(10,0,null,1,3,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),n.qb(11,16384,null,0,q,[],null,null),(t()(),n.Jb(12,null,["Published: ",""])),n.Fb(13,2),(t()(),n.rb(14,0,null,1,3,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),n.qb(15,16384,null,0,q,[],null,null),(t()(),n.rb(16,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(t()(),n.Jb(-1,null,["Link to original"])),(t()(),n.rb(18,0,null,0,3,"mat-card-content",[["class","mat-card-content mat-card-content"]],null,null,null,null,null)),n.qb(19,16384,null,0,A,[],null,null),(t()(),n.rb(20,0,null,null,1,"div",[],[[8,"innerHTML",1]],null,null,null,null)),n.Fb(21,1),(t()(),n.rb(22,0,null,0,6,"mat-chip-list",[["class","mat-chip-list"],["fxLayoutAlign","center"]],[[1,"tabindex",0],[1,"aria-describedby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-multiselectable",0],[1,"role",0],[2,"mat-chip-list-disabled",null],[2,"mat-chip-list-invalid",null],[2,"mat-chip-list-required",null],[1,"aria-orientation",0],[8,"id",0]],[[null,"focus"],[null,"blur"],[null,"keydown"]],function(t,e,i){var a=!0;return"focus"===e&&(a=!1!==n.Bb(t,24).focus()&&a),"blur"===e&&(a=!1!==n.Bb(t,24)._blur()&&a),"keydown"===e&&(a=!1!==n.Bb(t,24)._keydown(i)&&a),a},Z,K)),n.Gb(6144,null,W.c,null,[B]),n.qb(24,1556480,null,1,B,[n.k,n.h,[2,R.b],[2,G.j],[2,G.d],d.a,[8,null]],null,null),n.Hb(603979776,1,{chips:1}),n.qb(26,671744,null,0,J.b,[n.k,Q.f,[2,J.g],Q.d],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(t()(),n.ib(16777216,null,0,1,null,X)),n.qb(28,278528,null,0,Y.j,[n.Q,n.N,n.t],{ngForOf:[0,"ngForOf"]},null)],function(t,e){t(e,24,0),t(e,26,0,"center"),t(e,28,0,e.context.ngIf.tags)},function(t,e){t(e,6,0,e.context.ngIf.title),t(e,9,0,e.context.ngIf.owner.display_name);var i=n.Kb(e,12,0,t(e,13,0,n.Bb(e.parent,0),1e3*e.context.ngIf.creation_date,"medium"));t(e,12,0,i),t(e,16,0,n.tb(1,"",e.context.ngIf.link,""));var a=n.Kb(e,20,0,t(e,21,0,n.Bb(e.parent,1),e.context.ngIf.body));t(e,20,0,a),t(e,22,1,[n.Bb(e,24).disabled?null:n.Bb(e,24)._tabIndex,n.Bb(e,24)._ariaDescribedby||null,n.Bb(e,24).required.toString(),n.Bb(e,24).disabled.toString(),n.Bb(e,24).errorState,n.Bb(e,24).multiple,n.Bb(e,24).role,n.Bb(e,24).disabled,n.Bb(e,24).errorState,n.Bb(e,24).required,n.Bb(e,24).ariaOrientation,n.Bb(e,24)._uid])})}function et(t){return n.Lb(0,[n.Db(0,Y.e,[n.v]),n.Db(0,$,[T.c]),(t()(),n.rb(2,0,null,null,6,"div",[["fxLayout","row wrap"],["fxLayoutAlign","center"],["fxLayoutGap","0.5%"]],null,null,null,null,null)),n.qb(3,671744,null,0,J.c,[n.k,Q.f,[2,J.i],Q.d],{fxLayout:[0,"fxLayout"]},null),n.qb(4,1720320,null,0,J.d,[n.k,n.A,R.b,Q.f,[2,J.h],Q.d],{fxLayoutGap:[0,"fxLayoutGap"]},null),n.qb(5,671744,null,0,J.b,[n.k,Q.f,[2,J.g],Q.d],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(t()(),n.ib(16777216,null,null,2,null,tt)),n.qb(7,16384,null,0,Y.k,[n.Q,n.N],{ngIf:[0,"ngIf"]},null),n.Db(131072,Y.b,[n.h])],function(t,e){var i=e.component;t(e,3,0,"row wrap"),t(e,4,0,"0.5%"),t(e,5,0,"center"),t(e,7,0,n.Kb(e,7,0,n.Bb(e,8).transform(i.question$)))},null)}function it(t){return n.Lb(0,[(t()(),n.rb(0,0,null,null,1,"app-question-details",[],null,null,null,et,U)),n.qb(1,114688,null,0,l,[c.a,a.a],null,null)],function(t,e){t(e,1,0)},null)}var nt=n.nb("app-question-details",l,it,{},{},[]),at=i("PCNd");i.d(e,"QuestionModuleNgFactory",function(){return rt});var rt=n.ob(o,[],function(t){return n.yb([n.zb(512,n.j,n.db,[[8,[s.a,nt]],[3,n.j],n.y]),n.zb(4608,Y.m,Y.l,[n.v,[2,Y.v]]),n.zb(4608,d.a,d.a,[]),n.zb(5120,n.b,function(t,e){return[Q.g(t,e)]},[Y.d,n.C]),n.zb(1073742336,Y.c,Y.c,[]),n.zb(1073742336,c.m,c.m,[[2,c.s],[2,c.k]]),n.zb(1073742336,R.a,R.a,[]),n.zb(1073742336,d.e,d.e,[[2,d.b],[2,T.g]]),n.zb(1073742336,D,D,[]),n.zb(1073742336,F,F,[]),n.zb(1073742336,Q.b,Q.b,[]),n.zb(1073742336,J.e,J.e,[]),n.zb(1073742336,at.a,at.a,[]),n.zb(1073742336,o,o,[]),n.zb(256,I,{separatorKeyCodes:[h.f]},[]),n.zb(1024,c.i,function(){return[[{path:"",component:l}]]},[])])})}}]);