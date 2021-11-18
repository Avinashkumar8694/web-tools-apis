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
export class prettify {
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
    this.serviceName = 'prettify';
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
      instance = new prettify(
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
      //appendnew_flow_prettify_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: prettify');

    //appendnew_flow_prettify_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: prettify');

    if (!this.swaggerDocument['paths']['/prettify']) {
      this.swaggerDocument['paths']['/prettify'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [
            {
              in: 'body',
              name: 'prettify',
              description: 'add code to prettify',
              required: true,
            },
          ],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/prettify']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [
          {
            in: 'body',
            name: 'prettify',
            description: 'add code to prettify',
            required: true,
          },
        ],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/prettify`,
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
          bh = await this.sd_lAJC8xyeoKM7iGSV(bh);
          //appendnew_next_sd_rZgQdX6M0RzabTAx
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rZgQdX6M0RzabTAx');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_prettify_HttpIn
  }
  //   service flows_prettify

  async prettifyCode(
    data: any = undefined,
    parser: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          data: data,
          parser: parser,
        },
        local: {
          response: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_U4jp8zFqFgMmO1Zz(bh);
      //appendnew_next_prettifyCode
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
      return await this.errorHandler(bh, e, 'sd_nMJWisxTKrzz7Y3W');
    }
  }

  async getPrettierConfig(parser: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          parser: parser,
        },
        local: {
          response: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_8x9Jgp957aQ6p9Lf(bh);
      //appendnew_next_getPrettierConfig
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
      return await this.errorHandler(bh, e, 'sd_j3zPlCIZ2ZMXyuER');
    }
  }

  //appendnew_flow_prettify_start

  async sd_U4jp8zFqFgMmO1Zz(bh) {
    try {
      let outputVariables = await this.getPrettierConfig(bh.input.parser);
      bh.prettierConfig = outputVariables.local.response;

      bh = await this.sd_x7A31cF1qD05aUhQ(bh);
      //appendnew_next_sd_U4jp8zFqFgMmO1Zz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U4jp8zFqFgMmO1Zz');
    }
  }

  async sd_x7A31cF1qD05aUhQ(bh) {
    try {
      const prettier = require('prettier');
      bh.local.response = {
        response: prettier.format(bh.input.data, bh.prettierConfig),
      };

      //appendnew_next_sd_x7A31cF1qD05aUhQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_x7A31cF1qD05aUhQ');
    }
  }

  async sd_8x9Jgp957aQ6p9Lf(bh) {
    try {
      bh.parserConfig = {
        typescript: { semi: true, singleQuote: true, parser: 'typescript' },
        html: {
          semi: true,
          singleQuote: true,
          parser: 'html',
          quoteProps: 'as-needed',
          trailingComma: 'es5',
          useTabs: true,
          tabWidth: 4,
        },
        js: {
          semi: true,
          singleQuote: true,
          quoteProps: 'as-needed',
          trailingComma: 'es5',
          useTabs: true,
          tabWidth: 4,
        },
        babel: {
          printWidth: 140,
          singleQuote: true,
          quoteProps: 'as-needed',
          trailingComma: 'es5',
          useTabs: true,
          tabWidth: 4,
          semi: true,
          bracketSpacing: true,
          arrowParens: 'avoid',
          parser: 'babel',
        },
      };
      if (Object.keys(bh.parserConfig).includes(bh.input.parser)) {
        bh.local.response = bh.parserConfig[bh.input.parser];
      } else {
        bh.local.response = '';
      }
      //appendnew_next_sd_8x9Jgp957aQ6p9Lf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8x9Jgp957aQ6p9Lf');
    }
  }

  async sd_lAJC8xyeoKM7iGSV(bh) {
    try {
      let outputVariables = await this.prettifyCode(
        bh.input.body.code,
        bh.input.body.parser
      );
      bh.response = outputVariables.local.response;

      await this.sd_CFLep8DSCss7u237(bh);
      //appendnew_next_sd_lAJC8xyeoKM7iGSV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lAJC8xyeoKM7iGSV');
    }
  }

  async sd_CFLep8DSCss7u237(bh) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CFLep8DSCss7u237');
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
  //appendnew_flow_prettify_Catch
}
