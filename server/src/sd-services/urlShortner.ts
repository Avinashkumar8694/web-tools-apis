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
//append_imports_end
export class urlShortner {
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
    this.serviceName = 'urlShortner';
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
      instance = new urlShortner(
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
      //appendnew_flow_urlShortner_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: urlShortner');

    //appendnew_flow_urlShortner_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: urlShortner');

    if (!this.swaggerDocument['paths']['/getIPInfo']) {
      this.swaggerDocument['paths']['/getIPInfo'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getIPInfo']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getIPInfo`,
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
          bh = await this.sd_SfWurpLSCEvwa8hL(bh);
          //appendnew_next_sd_tWE9MakdJmzJoLDH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_tWE9MakdJmzJoLDH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/shortner/add']) {
      this.swaggerDocument['paths']['/shortner/add'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [
            {
              in: 'query',
              name: 'sortener data',
              description: '{"url":"google.com","vanity": ""}',
              required: false,
            },
          ],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/shortner/add']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [
          {
            in: 'query',
            name: 'sortener data',
            description: '{"url":"google.com","vanity": ""}',
            required: false,
          },
        ],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/shortner/add`,
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
          bh = await this.sd_NrIYVa5MD5HcxsXS(bh);
          //appendnew_next_sd_0cZ263VMmbtpn3TV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0cZ263VMmbtpn3TV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_urlShortner_HttpIn
  }
  //   service flows_urlShortner

  async urlshortnerdata(bh) {
    try {
      bh = await this.sd_kBB8H7hegeKslGX9(bh);
      //appendnew_next_urlshortnerdata
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fJzGgP8x1besAFgj');
    }
  }

  async getIp(bh) {
    try {
      bh = await this.sd_oPiU86Sxr5FR8KbF(bh);
      //appendnew_next_getIp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GFwX9C6wKPFaqBfL');
    }
  }

  async addURLtoShortner(bh) {
    try {
      bh = await this.sd_2h4aq2FFPQX9Br3W(bh);
      //appendnew_next_addURLtoShortner
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LY7ISPOSwE5OUI4y');
    }
  }

  //appendnew_flow_urlShortner_start

  async sd_kBB8H7hegeKslGX9(bh) {
    try {
      bh.local.root_url = 'http://localhost:8081/';
      bh.local.min_vanity_length = 4;
      bh.local.num_of_urls_per_hour = 50;

      bh.local.get_query = 'SELECT * FROM urls WHERE segment = {SEGMENT}';
      bh.local.add_query =
        'INSERT INTO urls SET url = {URL}, segment = {SEGMENT}, ip = {IP}';
      bh.local.check_url_query = 'SELECT * FROM urls WHERE url = {URL}';
      bh.local.update_views_query =
        'UPDATE urls SET num_of_clicks = {VIEWS} WHERE id = {ID}';
      bh.local.insert_view =
        'INSERT INTO stats SET ip = {IP}, url_id = {URL_ID}, referer = {REFERER}';
      bh.local.check_ip_query =
        'SELECT COUNT(id) as counted FROM urls WHERE datetime_added >= now() - INTERVAL 1 HOUR AND ip = {IP}';

      bh.local.host = 'localhost';
      bh.local.user = 'root';
      bh.local.password = 'password';
      bh.local.database = 'urlsh';
      //appendnew_next_sd_kBB8H7hegeKslGX9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kBB8H7hegeKslGX9');
    }
  }

  async sd_SfWurpLSCEvwa8hL(bh) {
    try {
      bh = await this.getIp(bh);
      await this.sd_6pbnasiK3pnTIq04(bh);
      //appendnew_next_sd_SfWurpLSCEvwa8hL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SfWurpLSCEvwa8hL');
    }
  }

  async sd_6pbnasiK3pnTIq04(bh) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6pbnasiK3pnTIq04');
    }
  }

  async sd_oPiU86Sxr5FR8KbF(bh) {
    try {
      bh.local.userip =
        bh.web.req.header('x-forwarded-for') ||
        bh.web.req.connection.remoteAddress;
      //appendnew_next_sd_oPiU86Sxr5FR8KbF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oPiU86Sxr5FR8KbF');
    }
  }

  async sd_2h4aq2FFPQX9Br3W(bh) {
    try {
      bh = await this.urlshortnerdata(bh);
      bh = await this.sd_dkerVfV16vZJ7NbO(bh);
      //appendnew_next_sd_2h4aq2FFPQX9Br3W
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2h4aq2FFPQX9Br3W');
    }
  }

  async sd_dkerVfV16vZJ7NbO(bh) {
    try {
      bh = await this.getIp(bh);
      bh = await this.sd_HhLyTCLhASSdO5xL(bh);
      //appendnew_next_sd_dkerVfV16vZJ7NbO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dkerVfV16vZJ7NbO');
    }
  }

  async sd_HhLyTCLhASSdO5xL(bh) {
    try {
      bh.local.selectipquery = bh.local.check_ip_query.replace(
        '{IP}',
        `'${bh.local.userip}'`
      );

      bh = await this.selecturl(bh);
      //appendnew_next_sd_HhLyTCLhASSdO5xL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HhLyTCLhASSdO5xL');
    }
  }

  async selecturl(bh) {
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
      bh.local.selectediplist = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.selectipquery,
        params
      );
      bh = await this.sd_YCWoPP0jM1M4pIJ3(bh);
      //appendnew_next_selecturl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_74KvI4GEyEGG9xrK');
    }
  }

  async sd_YCWoPP0jM1M4pIJ3(bh) {
    try {
      console.log('selectediplist', bh.local.selectediplist);
      bh.local.response = {
        message: 'success',
      };
      bh = await this.sd_dyAJI12yGYCuLx89(bh);
      //appendnew_next_sd_YCWoPP0jM1M4pIJ3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YCWoPP0jM1M4pIJ3');
    }
  }

  async sd_dyAJI12yGYCuLx89(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['neq'](
          bh.local.selectediplist,
          undefined &&
            bh.local.selectediplist.counted < bh.local.num_of_urls_per_hour,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_jeoBb7vPGp3D5Ijp(bh);
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
        bh = await this.sd_KrMRS3Mp84W5LmRo(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dyAJI12yGYCuLx89');
    }
  }

  async sd_jeoBb7vPGp3D5Ijp(bh) {
    try {
      console.log('true');
      bh.local.checkurlquery = bh.local.check_url_query.replace(
        '{URL}',
        decodeURIComponent(bh.input.params.url)
      );
      bh = await this.selecturlquery(bh);
      //appendnew_next_sd_jeoBb7vPGp3D5Ijp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jeoBb7vPGp3D5Ijp');
    }
  }

  async selecturlquery(bh) {
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
      bh.local.selectedurllist = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.checkurlquery,
        params
      );
      bh = await this.sd_XL7xUctIUzQMugmr(bh);
      //appendnew_next_selecturlquery
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eFc6PxNNanRrwDBS');
    }
  }

  async sd_XL7xUctIUzQMugmr(bh) {
    try {
      console.log(bh.local.selectedurllist);
      //appendnew_next_sd_XL7xUctIUzQMugmr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XL7xUctIUzQMugmr');
    }
  }

  async sd_KrMRS3Mp84W5LmRo(bh) {
    try {
      console.log('false');
      //appendnew_next_sd_KrMRS3Mp84W5LmRo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KrMRS3Mp84W5LmRo');
    }
  }

  async sd_NrIYVa5MD5HcxsXS(bh) {
    try {
      bh = await this.addURLtoShortner(bh);
      await this.sd_FQf9FIdw05FGhrvq(bh);
      //appendnew_next_sd_NrIYVa5MD5HcxsXS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NrIYVa5MD5HcxsXS');
    }
  }

  async sd_FQf9FIdw05FGhrvq(bh) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FQf9FIdw05FGhrvq');
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
  //appendnew_flow_urlShortner_Catch
}
