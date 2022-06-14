/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Toolbar',
  templateUrl: './Toolbar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ToolbarComponent {
  @Output('callFromChildComponent')
  public callFromChildComponent: any = new EventEmitter<any>();
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_iFySQxfRO70NzmMP(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_iFySQxfRO70NzmMP(bh) {
    try {
      bh = this.sd_nBQhEpxThPBpRNsI(bh);
      //appendnew_next_sd_iFySQxfRO70NzmMP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iFySQxfRO70NzmMP');
    }
  }

  hideShowSidenav(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_AUzNQ1l7LCjKLTY7(bh);
      //appendnew_next_hideShowSidenav
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z7pshiyibBLOL67g');
    }
  }

  //appendnew_flow_ToolbarComponent_start

  sd_nBQhEpxThPBpRNsI(bh) {
    try {
      this.page.iconsArr = [
        { name: 'HOME', icon: 'home', color: 'color:#666666;' },
        { name: 'My Network', icon: 'group', color: 'color:#666666;' },
        { name: 'Jobs', icon: 'work', color: 'color:#666666;' },
        { name: 'Messaging', icon: 'comment', color: 'color:#666666;' },
        {
          name: 'Notifications',
          icon: 'notifications_none',
          color: 'color:#666666;',
        },
      ];
      //appendnew_next_sd_nBQhEpxThPBpRNsI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nBQhEpxThPBpRNsI');
    }
  }

  sd_AUzNQ1l7LCjKLTY7(bh) {
    try {
      bh.pageOutput.callFromChildComponent.emit();
      //appendnew_next_sd_AUzNQ1l7LCjKLTY7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AUzNQ1l7LCjKLTY7');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_ToolbarComponent_Catch
}
