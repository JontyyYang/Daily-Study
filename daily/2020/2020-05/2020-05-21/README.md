# 本地运行TS项目，debug

需求大概是**本地做一些demo，demo用TS来写，希望可以支持debug**

1. 全局安装typescript， 全局安装ts-node(理论上可以不要)

   ```shell
   yarn add global typescipt
   yarn add global ts-node
   ```

2. 在tsconfig中开启sourceMap，此处需要先生成tsconfig.json， 生成方法是 

   ```shell
   tsc --init
   ```

   此处我的配置是,主要内容都是注释掉的，是ts默认提供的

   ```json
   {
     "compilerOptions": {
       /* Visit https://aka.ms/tsconfig.json to read more about this file */
   
       /* Basic Options */
       // "incremental": true,                   /* Enable incremental compilation */
       "target": "ES2018",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
       "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
       // "lib": [],                             /* Specify library files to be included in the compilation. */
       // "allowJs": true,                       /* Allow javascript files to be compiled. */
       // "checkJs": true,                       /* Report errors in .js files. */
       // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
       // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
       // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
       "sourceMap": true,                     /* Generates corresponding '.map' file. */
       // "outFile": "./",                       /* Concatenate and emit output to single file. */
       // "outDir": "./",                        /* Redirect output structure to the directory. */
       // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
       // "composite": true,                     /* Enable project compilation */
       // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
       // "removeComments": true,                /* Do not emit comments to output. */
       // "noEmit": true,                        /* Do not emit outputs. */
       // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
       // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
       // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
   
       /* Strict Type-Checking Options */
       "strict": true,                           /* Enable all strict type-checking options. */
       // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
       // "strictNullChecks": true,              /* Enable strict null checks. */
       // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
       // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
       // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
       "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
       // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */
   
       /* Additional Checks */
       // "noUnusedLocals": true,                /* Report errors on unused locals. */
       // "noUnusedParameters": true,            /* Report errors on unused parameters. */
       // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
       // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */
   
       /* Module Resolution Options */
       // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
       // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
       // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
       // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
       // "typeRoots": [],                       /* List of folders to include type definitions from. */
       // "types": [],                           /* Type declaration files to be included in compilation. */
       // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
       "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
       // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
       // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */
   
       /* Source Map Options */
       // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
       // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
       // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
       // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */
   
       /* Experimental Options */
       // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
       // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
   
       /* Advanced Options */
       "skipLibCheck": true,                     /* Skip type checking of declaration files. */
       "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
     },
     "include": [
       "**/*.ts"  /*这里是路径 */
     ],
   }
   
   ```

3. 打开vscode，点击断点图标时候，就是左侧的，像小虫子一样的， 点开之后有个类似播放的按钮，我需要对我当前打开的ts页面断点调试， 只需要在规定的地方加debugger

4. 点击播放按钮， 会提示你， launch.json文件需要配置，我的配置是

   ```json
   {
     // Use IntelliSense to learn about possible attributes.
     // Hover to view descriptions of existing attributes.
     // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
     "version": "0.2.0",
     "configurations": [
       {
        "name": "Current TS File",
        "type": "node",
        "request": "launch",
        "args": [
          "${relativeFile}"
        ],
        "runtimeArgs": [
          "--nolazy",
          "-r",
          "ts-node/register"
        ],
        "sourceMaps": true,
        "cwd": "${workspaceRoot}",
        "protocol": "inspector",
        "console": "integratedTerminal",
        "internalConsoleOptions": "neverOpen"
       }
     ]
   }
   
   
   
   ```

5. 然后他会提示你， typescript和ts-node不存在，这个时候 yarn init生成pck文件， 然后

   ~~~JavaScript
   yarn add typescript --save
   yarn add ts-node --save-dev
   ~~~

6. 再次断点调试即可

7. 一些基本操作

   ~~~JavaScript
   F5 - 开始调试、继续执行
   cmd(ctrl) + shift + F5 - 重启
   shift + F5 - 结束调试
   F9 - 添加断点
   F10 - 单步跳过
   F11 - 单步调试
   shift + f11 - 单步跳出
   ~~~

   