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

  async forecastapi(place: any = undefined, ...others) {
    let bh: any = {
      input: {
        place,
      },
      local: {
        resultfdata: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_i0Rd4OtlZxW8tt0d(bh);
      //appendnew_next_forecastapi
      return (
        // formatting output variables
        {
          input: {},
          local: {
            resultfdata: bh.local.resultfdata,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lLaIWdce3aMEdxgq');
    }
  }
  //appendnew_flow_weatherapi_start

  async sd_BHnvXjQVIlwaaP7C(bh) {
    try {
      bh.input.place = 'kasaragod';
      bh.local.url =
        bh.system.environment.properties.WEATHER_API_URL +
        '/weather?q=' +
        bh.input.place +
        '&appid=' +
        bh.system.environment.properties.WEATHER_API_KEY +
        '&units=metric';
      console.log(bh.local.url);
      bh = await this.callhttprequest(bh);
      //appendnew_next_sd_BHnvXjQVIlwaaP7C
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BHnvXjQVIlwaaP7C');
    }
  }

  async callhttprequest(bh) {
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
      bh = await this.sd_dhF1IhHuAKuPFWlA(bh);
      //appendnew_next_callhttprequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8lMw97wzMvQxunIy');
    }
  }

  async sd_dhF1IhHuAKuPFWlA(bh) {
    try {
      console.log(bh.local.resultdata);
      console.log(bh.local);
      console.log(bh.input);
      //appendnew_next_sd_dhF1IhHuAKuPFWlA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dhF1IhHuAKuPFWlA');
    }
  }

  async sd_i0Rd4OtlZxW8tt0d(bh) {
    try {
      bh.input.place = 'kasaragod';
      bh.local.url =
        bh.system.environment.properties.WEATHER_API_URL +
        '/forecast?q=' +
        bh.input.place +
        '&appid=' +
        bh.system.environment.properties.WEATHER_API_KEY +
        '&units=metric';
      console.log(bh.local.url);
      bh = await this.sd_5muX0vwvKwT8Wcxl(bh);
      //appendnew_next_sd_i0Rd4OtlZxW8tt0d
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_i0Rd4OtlZxW8tt0d');
    }
  }

  async sd_5muX0vwvKwT8Wcxl(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.resultfdata = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_WKvRBwF0TfVheXN1(bh);
      //appendnew_next_sd_5muX0vwvKwT8Wcxl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5muX0vwvKwT8Wcxl');
    }
  }

  async sd_WKvRBwF0TfVheXN1(bh) {
    try {
      console.log(bh.local.resultfdata);
      console.log('bh.local');
      //appendnew_next_sd_WKvRBwF0TfVheXN1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WKvRBwF0TfVheXN1');
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
