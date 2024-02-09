// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class weatherapi {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_weatherapi

  async weatherapi(place: any = undefined, ...others) {
    let bh: any = {
      input: {
        place,
      },
      local: {
        resultdata: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_BHnvXjQVIlwaaP7C(bh);
      //appendnew_next_weatherapi
      return (
        // formatting output variables
        {
          input: {},
          local: {
            resultdata: bh.local.resultdata,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jq3BYVrlC0e9zBEe');
    }
  }
  //appendnew_flow_weatherapi_start

  async sd_BHnvXjQVIlwaaP7C(bh) {
    try {
      bh.local.url =
        bh.system.environment.properties.WEATHER_API_URL +
        '/weather?q=' +
        bh.input.place +
        '&appid=' +
        bh.system.environment.properties.WEATHER_API_KEY +
        '&units=metric';
      console.log(bh.local.url);
      bh = await this.sd_8lMw97wzMvQxunIy(bh);
      //appendnew_next_sd_BHnvXjQVIlwaaP7C
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BHnvXjQVIlwaaP7C');
    }
  }

  async sd_8lMw97wzMvQxunIy(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.resultdata = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_8lMw97wzMvQxunIy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8lMw97wzMvQxunIy');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_weatherapi_Catch
}
