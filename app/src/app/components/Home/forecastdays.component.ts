// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector, Input } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-forecastdays',
  templateUrl: './forecastdays.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class forecastdaysComponent {
  @Input('forecastdata')
  public forecastdata: any = undefined;
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
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
      this.sd_As39VSvhp9YQkISa(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_As39VSvhp9YQkISa(bh) {
    try {
      bh = this.sd_ZJjKXnsC838lZHas(bh);
      //appendnew_next_sd_As39VSvhp9YQkISa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_As39VSvhp9YQkISa');
    }
  }

  //appendnew_flow_forecastdaysComponent_start

  sd_ZJjKXnsC838lZHas(bh) {
    try {
      this.page.forecastdata = bh.pageInput.forecastdata;
      bh = this.sd_4k44q82HWs9FJcDz(bh);
      //appendnew_next_sd_ZJjKXnsC838lZHas
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZJjKXnsC838lZHas');
    }
  }

  sd_4k44q82HWs9FJcDz(bh) {
    try {
      const page = this.page;
      console.log(page, 'forcastdata =============');
      //appendnew_next_sd_4k44q82HWs9FJcDz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4k44q82HWs9FJcDz');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_forecastdaysComponent_Catch
}
