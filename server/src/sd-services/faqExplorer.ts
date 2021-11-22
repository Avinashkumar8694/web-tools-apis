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
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
import * as SSD_SERVICE_ID_sd_qRvCWKKLZBnOI9Bg from './encode_decode_url'; //_splitter_
import * as SSD_SERVICE_ID_sd_fpEwNEv7m8vBG6cS from './staticdata'; //_splitter_
//append_imports_end
export class faqExplorer {
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
    this.serviceName = 'faqExplorer';
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
      instance = new faqExplorer(
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
      //appendnew_flow_faqExplorer_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: faqExplorer');

    //appendnew_flow_faqExplorer_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: faqExplorer');

    if (!this.swaggerDocument['paths']['/seoQuestionSuggestion']) {
      this.swaggerDocument['paths']['/seoQuestionSuggestion'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [
            {
              in: 'body',
              name: 'keyword',
              description: 'add a keyword',
              required: false,
            },
          ],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/seoQuestionSuggestion']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [
          {
            in: 'body',
            name: 'keyword',
            description: 'add a keyword',
            required: false,
          },
        ],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/seoQuestionSuggestion`,
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
          bh = await this.sd_M0w2MHIDZPgQenF6(bh);
          //appendnew_next_sd_l7v0aBED78AfqR9t
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_l7v0aBED78AfqR9t');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_faqExplorer_HttpIn
  }
  //   service flows_faqExplorer

  //appendnew_flow_faqExplorer_start

  async sd_M0w2MHIDZPgQenF6(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_3oeBBHXnj8SVafWm'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.sqlInsertResponse = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.inserSQLtQuery,
        params
      );
      bh = await this.sd_SlvgH0yJnZjjRwfj(bh);
      //appendnew_next_sd_M0w2MHIDZPgQenF6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_M0w2MHIDZPgQenF6');
    }
  }

  async sd_SlvgH0yJnZjjRwfj(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['lt'](
          bh.startIndex,
          bh.questionType.length,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_OIZIQmUWVmoe7XIb(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_el00JWMdLwCt5sLt(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SlvgH0yJnZjjRwfj');
    }
  }

  async sd_OIZIQmUWVmoe7XIb(bh) {
    try {
      bh.currentQKeyword =
        bh.questionType[bh.startIndex] + ' ' + bh.input.body.keyword;
      bh = await this.sd_K5SPJOh3dXt9OMLw(bh);
      //appendnew_next_sd_OIZIQmUWVmoe7XIb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OIZIQmUWVmoe7XIb');
    }
  }

  async sd_K5SPJOh3dXt9OMLw(bh) {
    try {
      const SSD_SERVICE_ID_sd_qRvCWKKLZBnOI9BgInstance: SSD_SERVICE_ID_sd_qRvCWKKLZBnOI9Bg.encode_decode_url =
        SSD_SERVICE_ID_sd_qRvCWKKLZBnOI9Bg.encode_decode_url.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_qRvCWKKLZBnOI9BgInstance.encodeURL(
          bh.currentQKeyword
        );
      bh.encodedKeyword = outputVariables.local.response;

      bh = await this.sd_HHX1h3RwLA514Zw0(bh);
      //appendnew_next_sd_K5SPJOh3dXt9OMLw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_K5SPJOh3dXt9OMLw');
    }
  }

  async sd_HHX1h3RwLA514Zw0(bh) {
    try {
      const SSD_SERVICE_ID_sd_fpEwNEv7m8vBG6cSInstance: SSD_SERVICE_ID_sd_fpEwNEv7m8vBG6cS.staticdata =
        SSD_SERVICE_ID_sd_fpEwNEv7m8vBG6cS.staticdata.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fpEwNEv7m8vBG6cSInstance.getGoogleDomain();
      bh.googleDomain = outputVariables.local.response;

      bh = await this.sd_XkiHTrInpYVtjcdM(bh);
      //appendnew_next_sd_HHX1h3RwLA514Zw0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HHX1h3RwLA514Zw0');
    }
  }

  async sd_XkiHTrInpYVtjcdM(bh) {
    try {
      // bh.ssdUrl = `https://www.google.com/complete/search?hl=en&sugexp=msedr&gs_rn=62&gs_ri=hp&cp=1&gs_id=9c&q=a&xhr=t`;
      bh.ssdUrl = `http://${bh.googleDomain}/complete/search?output=json&client=firefox&hl=en-US&q=${bh.encodedKeyword.encodedURL}`;

      // encodedKeyword
      bh = await this.sd_fNEqmjVUCbk8gy5A(bh);
      //appendnew_next_sd_XkiHTrInpYVtjcdM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XkiHTrInpYVtjcdM');
    }
  }

  async sd_fNEqmjVUCbk8gy5A(bh) {
    try {
      const SSD_SERVICE_ID_sd_fpEwNEv7m8vBG6cSInstance: SSD_SERVICE_ID_sd_fpEwNEv7m8vBG6cS.staticdata =
        SSD_SERVICE_ID_sd_fpEwNEv7m8vBG6cS.staticdata.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fpEwNEv7m8vBG6cSInstance.randomAgent();
      bh.userAgent = outputVariables.local.response;

      bh = await this.sd_blCO2tVU0C5MQfxs(bh);
      //appendnew_next_sd_fNEqmjVUCbk8gy5A
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fNEqmjVUCbk8gy5A');
    }
  }

  async sd_blCO2tVU0C5MQfxs(bh) {
    try {
      let requestOptions = {
        url: bh.ssdUrl,
        timeout: 30000,
        method: 'get',
        headers: bh.userAgent,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        rejectUnauthorized: undefined,
        useQuerystring: false,
      };
      if (!false) {
        requestOptions.rejectUnauthorized = false;
      }
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.response = responseMsg;
      bh = await this.sd_r9al7KTtK93ijKhm(bh);
      //appendnew_next_sd_blCO2tVU0C5MQfxs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_blCO2tVU0C5MQfxs');
    }
  }

  async sd_r9al7KTtK93ijKhm(bh) {
    try {
      bh.preparedQuestion.push({
        keyword: bh.input.body.keyword,
        questions: bh.response.payload[1],
        questionType: bh.questionType[bh.startIndex],
      });
      bh.startIndex = bh.startIndex + 1;
      bh = await this.sd_SlvgH0yJnZjjRwfj(bh);
      //appendnew_next_sd_r9al7KTtK93ijKhm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_r9al7KTtK93ijKhm');
    }
  }

  async sd_el00JWMdLwCt5sLt(bh) {
    try {
      bh.web.res.status(200).send(bh.preparedQuestion);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_el00JWMdLwCt5sLt');
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
  //appendnew_flow_faqExplorer_Catch
}
