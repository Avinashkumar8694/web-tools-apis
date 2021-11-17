let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
//append_imports_end
export class encode_decode_url {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'encode_decode_url';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new encode_decode_url(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_encode_decode_url_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: encode_decode_url');

    //appendnew_flow_encode_decode_url_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: encode_decode_url');

    if (!this.swaggerDocument['paths']['/encodeurl']) {
      this.swaggerDocument['paths']['/encodeurl'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [
            {
              in: 'body',
              name: 'encode url',
              description: 'add a url o encode',
              required: true,
            },
          ],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/encodeurl']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [
          {
            in: 'body',
            name: 'encode url',
            description: 'add a url o encode',
            required: true,
          },
        ],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/encodeurl`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_oJzOFIwiI4op9z57(bh);
          //appendnew_next_sd_w8syrUhPgCP4Kfz6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_w8syrUhPgCP4Kfz6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/decodeurl']) {
      this.swaggerDocument['paths']['/decodeurl'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [
            {
              in: 'body',
              name: 'encode url',
              description: 'add a url o encode',
              required: true,
            },
          ],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/decodeurl']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [
          {
            in: 'body',
            name: 'encode url',
            description: 'add a url o encode',
            required: true,
          },
        ],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/decodeurl`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_tl4Z0ArEFjTpAVgp(bh);
          //appendnew_next_sd_X5d79D7kMtOW5kHq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_X5d79D7kMtOW5kHq');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_encode_decode_url_HttpIn
  }
  //   service flows_encode_decode_url

  async encodeURL(url: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          url: url,
        },
        local: {
          response: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_egnWKpcL90veUtVt(bh);
      //appendnew_next_encodeURL
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RkaByDaKfikztWgv');
    }
  }

  async dncodeURL(url: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          url: url,
        },
        local: {
          response: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_AYWwKPM8gskMBjJy(bh);
      //appendnew_next_dncodeURL
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_La2g7qisQ2KN3h7p');
    }
  }

  //appendnew_flow_encode_decode_url_start

  async sd_egnWKpcL90veUtVt(bh) {
    try {
      const { encode } = require('url-encode-decode');

      if (bh.input.url) {
        bh.local.response = {
          encodedURL: encode(bh.input.url),
          httpStatus: 200,
        };
      } else {
        bh.local.response = {
          encodedURL: 'url is required',
          httpStatus: 400,
        };
      }
      //appendnew_next_sd_egnWKpcL90veUtVt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_egnWKpcL90veUtVt');
    }
  }

  async sd_oJzOFIwiI4op9z57(bh) {
    try {
      let outputVariables = await this.encodeURL(bh.input.body.url);
      bh.encodeResponse = outputVariables.local.response;

      await this.sd_tuoZuKJO8tvLgHED(bh);
      //appendnew_next_sd_oJzOFIwiI4op9z57
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oJzOFIwiI4op9z57');
    }
  }

  async sd_tuoZuKJO8tvLgHED(bh) {
    try {
      bh.web.res
        .status(bh.encodeResponse.httpStatus)
        .send(bh.encodeResponse.encodedURL);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tuoZuKJO8tvLgHED');
    }
  }

  async sd_AYWwKPM8gskMBjJy(bh) {
    try {
      const { encode } = require('url-encode-decode');

      if (bh.input.url) {
        bh.local.response = {
          decodedURL: decode(bh.input.url),
          httpStatus: 200,
        };
      } else {
        bh.local.response = {
          decodedURL: 'url is required',
          httpStatus: 400,
        };
      }
      //appendnew_next_sd_AYWwKPM8gskMBjJy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AYWwKPM8gskMBjJy');
    }
  }

  async sd_tl4Z0ArEFjTpAVgp(bh) {
    try {
      let outputVariables = await this.dncodeURL(bh.input.body.url);
      bh.encodeResponse = outputVariables.local.response;

      await this.sd_HvWerJlIesW8au3Y(bh);
      //appendnew_next_sd_tl4Z0ArEFjTpAVgp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tl4Z0ArEFjTpAVgp');
    }
  }

  async sd_HvWerJlIesW8au3Y(bh) {
    try {
      bh.web.res
        .status(bh.encodeResponse.httpStatus)
        .send(bh.encodeResponse.decodedURL);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HvWerJlIesW8au3Y');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_encode_decode_url_Catch
}
