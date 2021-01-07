(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{120:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},u=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(a),d=t,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return a?r.a.createElement(m,c(c({ref:n},l),{},{components:a})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return s})),a.d(n,"default",(function(){return b}));var t=a(3),r=a(7),o=(a(0),a(120)),i={id:"funciones-importantes",title:"Funciones Importantes en EOSIO",sidebar_label:"Funciones Importantes"},c={unversionedId:"aprender-eosio/funciones-importantes",id:"aprender-eosio/funciones-importantes",isDocsHomePage:!1,title:"Funciones Importantes en EOSIO",description:"Cuenta Privilegiada EOSIO",source:"@site/docs/aprender-eosio/funciones-importantes.md",slug:"/aprender-eosio/funciones-importantes",permalink:"/docs/aprender-eosio/funciones-importantes",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/funciones-importantes.md",version:"current",lastUpdatedBy:"Steph",lastUpdatedAt:1610058988,sidebar_label:"Funciones Importantes",sidebar:"docs",previous:{title:"Cuentas y Permisos",permalink:"/docs/aprender-eosio/cuentas-permisos"},next:{title:"Manejo de Llaves Privadas",permalink:"/docs/aprender-eosio/llaves-privadas"}},s=[{value:"Cuenta Privilegiada EOSIO",id:"cuenta-privilegiada-eosio",children:[]},{value:"Funciones Privilegiadas EOSIO",id:"funciones-privilegiadas-eosio",children:[]},{value:"Acciones de Sistema",id:"acciones-de-sistema",children:[]},{value:"Contrato Nativo eosio.token",id:"contrato-nativo-eosiotoken",children:[]}],l={toc:s};function b(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"cuenta-privilegiada-eosio"},"Cuenta Privilegiada EOSIO"),Object(o.b)("p",null,"Esta cuenta posee acceso ilimitado a los recursos CPU, NET, y RAM asi como funciones privilegiadas.  Esta cuenta privilegiada se denomina ",Object(o.b)("inlineCode",{parentName:"p"},"eosio"),". "),Object(o.b)("h3",{id:"funciones-privilegiadas-eosio"},"Funciones Privilegiadas EOSIO"),Object(o.b)("p",null,"Los contratos inteligentes de EOSIO son simples archivos de WebAssembly. El formato WebAssembly permite definir importaciones, funciones que no se declaran en WASM en s\xed pero en el entorno en el que se ejecuta el c\xf3digo de WebAssembly. EOSIO utiliza estas funciones integradas (intr\xednsecas) para intercambiar datos entre el c\xf3digo de contrato de WebAssembly y el nodo EOSIO ",Object(o.b)("inlineCode",{parentName:"p"},"nodeos"),". Cada vez que la m\xe1quina virtual EOS (EOSVM), que ejecuta el c\xf3digo de WebAssembly, llega a un nivel intr\xednseco, el control del programa se transfiere al c\xf3digo del controlador de nodo para resolverlo. Una lista completa de funciones intr\xednsecas para EOSIO 2.0.X se puede encontrar ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/EOSIO/eosio.cdt/blob/a6b8d3fc289d46f4612588cdd7223a3d549238f6/libraries/native/native/eosio/intrinsics_def.hpp#L42-L160"}),"aqu\xed"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"set_resource_limits"))),Object(o.b)("p",null,"Actualiza los limites de recursos asociados a una cuenta Utiliza como par\xe1metros:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"account:  La cuenta destino\nram_bytes:  El limite de RAM en bytes\nnet_weight:  El weight para determinar su capacidad de NET\ncpu_weight:  El weight para determinar su capacidad de CPU\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"set_prods"))),Object(o.b)("p",null,"Establece una nueva lista de productores(validadores) activos. Una vez que el bloque con la propuesta se vuelve irreversible los nuevos productores se vuelven activos. Par\xe1metros:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"schedule: JSON con lista de productores y sus signing keys\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"set_params"))),Object(o.b)("p",null,"Modifica uno o varios par\xe1metros de la blockchain."),Object(o.b)("p",null,"Par\xe1metros:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"max_block_net_usage"))," La cantidad maxima de uso de net en un bloque"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"target_block_net_usage_pct"))," El porcentaje de uso maximo de net, pasado este limite la red entra en modo congestion."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"max_transaction_net_usage"))," El uso maximo de net que la chain va a permitir, mas alla de los limites de la cuenta."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"base_per_transaction_net_usage")),"\nEl monto base de uso neto facturado por una transacci\xf3n para cubrir imprevistos"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"context_free_discount_net_usage_num"))," El numerador para el descuento en el uso neto de datos sin contexto"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"context_free_discount_net_usage_den"))," El denominador para el descuento en el uso neto de datos sin contexto"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"max_block_cpu_usage"))," El uso m\xe1ximo de la CPU facturable (en microsegundos) para un bloque"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"target_block_cpu_usage_pct"))," El porcentaje objetivo (1% == 100, 100% = 10,000) del uso m\xe1ximo de CPU; exceder esto desencadena el manejo de la congesti\xf3n"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"max_transaction_cpu_usage"))," El uso m\xe1ximo de CPU facturable (en microsegundos) que la cadena permitir\xe1 independientemente de los l\xedmites de la cuenta"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"min_transaction_cpu_usage"))," El uso m\xednimo de CPU facturable (en microsegundos) que requiere la cadena"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"max_transaction_lifetime"))," El n\xfamero m\xe1ximo de segundos que la caducidad de una transacci\xf3n de entrada puede adelantarse a la hora del bloque en el que se incluye por primera vez"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"deferred_trx_expiration_window"))," El n\xfamero de segundos despu\xe9s del tiempo en que una transacci\xf3n diferida puede ejecutarse primero hasta que caduque"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"max_transaction_delay"))," El n\xfamero m\xe1ximo de segundos que pueden imponerse como requisito de retraso mediante verificaciones de autorizaci\xf3n"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"max_inline_action_size"))," Tama\xf1o m\xe1ximo permitido (en bytes) de una acci\xf3n en l\xednea"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"max_inline_action_depth"))," L\xedmite de profundidad de recursi\xf3n al enviar acciones en l\xednea"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"max_authority_depth"))," L\xedmite de profundidad de recursi\xf3n para verificar si una autoridad est\xe1 satisfecha")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"set_privileged"))),Object(o.b)("p",null,"Permite establecer como privilegiada a una cuenta. Par\xe1metros:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"account: La cuenta que se quiere setear como privilegiada\nis_priv:  0 para falso, mayor a 0 para verdadero\n")),Object(o.b)("h3",{id:"acciones-de-sistema"},"Acciones de Sistema"),Object(o.b)("p",null,"Estas acciones no requieren ser ejecutadas por una cuenta privilegiada."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"new_account"))),Object(o.b)("p",null,"Crea una cuenta nueva. Utiliza como par\xe1metros:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"creator: Nombre de la cuenta que crea la cuenta nueva\nname: Nombre de la cuenta nueva\nowner: Owner public key\nactive: Active public key\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"set code"))),Object(o.b)("p",null,"Set code establecer o actualizar un contrato inteligente en una cuenta Utiliza como par\xe1metros:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"account: La cuenta a la que se desea publicar un contrato\ncode: El c\xf3digo en forma de BLOB binario\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"set abi"))),Object(o.b)("p",null,"Permite establecer o actualizar el abi para el contrato inteligente, se identifica por account_name. Utiliza como par\xe1metros:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"account: El nombre de la cuenta destino\nabi:  El abi\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"updateauth"))),Object(o.b)("p",null,"actualiza los permisos de una cuenta. Utiliza como par\xe1metros:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"account:  La cuenta que se desea modificar.\npemission:  El nombre del nuevo permiso\nparent: El permiso padre del nuevo permiso\nauth: El json definiendo la autorizaci\xf3n de permisos\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"deleteauth"))),Object(o.b)("p",null,"elimina la autorizaci\xf3n de permisos de una cuenta . Utiliza como par\xe1metros:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"account: La cuenta destino\npermission: El nombre del permiso que se desea eliminar\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"linkauth"))),Object(o.b)("p",null,"Asigna una acci\xf3n especifica de un contrato a un permiso especifico, cinco acciones no pueden ser linkeadas updateauth,deleteauth,linkauth,unlikauth,canceldelay Par\xe1metros utilizados:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"account: Cuenta destino\ncode: Cuenta owner de la acci\xf3n que se desea linkear\ntype: La accion que se desea linkear\nrequirement: El permiso a linkear.\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"unlinkauth"))),Object(o.b)("p",null,"Es la reversa de linkauth Par\xe1metros:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"account: Cuenta destino\ncode: Cuenta owner de la accion que se desea deslinkear\ntype: La acci\xf3n que se desea deslinkear\n")),Object(o.b)("h3",{id:"contrato-nativo-eosiotoken"},"Contrato Nativo eosio.token"),Object(o.b)("p",null,"Estas acciones pueden ser ejecutadas por cualquier cuenta con el fin de emitir un token propio."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"create"))),Object(o.b)("p",null,"Le permite a una cuenta ",Object(o.b)("strong",{parentName:"p"},"issuer")," crear un token. Utiliza como parametros:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"issuer: La cuenta que crea el token\nmaximum_supply: La cantidad maxima junto al simbolo del token.\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"issue"))),Object(o.b)("p",null,"Esta acci\xf3n distribuye a una cuenta una cantidad de tokens determinada. Utiliza como Par\xe1metros:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"to: Cuenta a la que se distribuyen los tokens\nquantity: La cantidad de tokens a distribuir\nmemo: memo que acompa\xf1a la distribuci\xf3n inicial de tokens\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"retire"))),Object(o.b)("p",null,"El opuesto a crear un token. Par\xe1metros:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"quantity: La cantidad de tokens a retirar\nmemo : El memo que acompa\xf1a la transacci\xf3n.\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"transfer"))),Object(o.b)("p",null,'Transfiere de una cuenta origen a una cuenta destino una cantidad "n" de tokens Par\xe1metros:'),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"from: Cuenta origen desde donde se debitan los tokens\no: Cuenta destino a la que acreditar los tokens\nquantity: La cantidad de tokens\nmemo: Memo que acompa\xf1a la transacci\xf3n\n")))}b.isMDXComponent=!0}}]);