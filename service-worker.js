/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "de341820d0e21379289e37b6c993a2c5"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e70ba1dc.js",
    "revision": "207c3a241899762e2a66d00b708f2fed"
  },
  {
    "url": "assets/js/11.12f8862b.js",
    "revision": "f48960e05da1a4454c400d09814057fe"
  },
  {
    "url": "assets/js/12.c1e9484f.js",
    "revision": "c9d7415ed7db4b6b8b8e44ba7e79e533"
  },
  {
    "url": "assets/js/13.a38bae57.js",
    "revision": "d204b05473b845efacda91f489813acd"
  },
  {
    "url": "assets/js/14.379a7b6f.js",
    "revision": "eda8249fdd8aa0c9ed59d4f03c7a7df0"
  },
  {
    "url": "assets/js/15.0d97a3f1.js",
    "revision": "86553b71e95a24abbb0842a78daaa0a2"
  },
  {
    "url": "assets/js/16.96e0afd1.js",
    "revision": "40cb0efd633aa47a50057575c9f8da23"
  },
  {
    "url": "assets/js/17.5d604219.js",
    "revision": "7dc640b4442b769aae3830999ab2fc9d"
  },
  {
    "url": "assets/js/18.fb850ea8.js",
    "revision": "377556b6dba11e966793e5e1146a1512"
  },
  {
    "url": "assets/js/19.b2970000.js",
    "revision": "3344e4d19753343e624d881c6fb2dfe1"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.20f88f2b.js",
    "revision": "da7eff8113f48772f625667d3f98de5d"
  },
  {
    "url": "assets/js/21.b9c83e85.js",
    "revision": "b921ec291f9a0592da5243f3a639001f"
  },
  {
    "url": "assets/js/22.d755962d.js",
    "revision": "c99c95c865ebaba7596ecad5a9c5f0ed"
  },
  {
    "url": "assets/js/23.7a2ca6d4.js",
    "revision": "c6fe347412202e4d06bfa0f0cf653053"
  },
  {
    "url": "assets/js/24.9f114fb4.js",
    "revision": "4d2e191793d2f11e163aa0c2c759f901"
  },
  {
    "url": "assets/js/25.f8d1d035.js",
    "revision": "48939d8b9e78c9f7344876ca607a14ef"
  },
  {
    "url": "assets/js/26.05c11010.js",
    "revision": "e625043f29005862d1791da575587091"
  },
  {
    "url": "assets/js/27.cec41180.js",
    "revision": "ab981aeeb2586eac9e89036ef3ff4289"
  },
  {
    "url": "assets/js/28.4e3d37b8.js",
    "revision": "71cc545a79d7dbfa156ec13a92be6544"
  },
  {
    "url": "assets/js/29.9fe9590a.js",
    "revision": "c0cbb5c92ba30374ec2f59067115b35d"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.d0f509d8.js",
    "revision": "43c4ce999b8322cf0f785be298e149b9"
  },
  {
    "url": "assets/js/31.8825a69b.js",
    "revision": "3c750568e73307ceb6f0f840e285b9f9"
  },
  {
    "url": "assets/js/32.aa2e6e0d.js",
    "revision": "1cea976f8cbdac3689e953962324757c"
  },
  {
    "url": "assets/js/33.8477e5e9.js",
    "revision": "a3cd7504d4c4db8b3ccd9b95db0f897d"
  },
  {
    "url": "assets/js/34.090d4f06.js",
    "revision": "0ce55159e12856b268e989ad557856ab"
  },
  {
    "url": "assets/js/35.da265bd7.js",
    "revision": "bdf7d27848a498e08b6251baeafc24db"
  },
  {
    "url": "assets/js/36.0dff3eca.js",
    "revision": "8d099040c3e0a01e0edc8de622f22cec"
  },
  {
    "url": "assets/js/37.032b7015.js",
    "revision": "e0f84be3c0257cc7cb69018dd04cdf49"
  },
  {
    "url": "assets/js/38.300ffac9.js",
    "revision": "2f4da5a985f31bf876dcd565b16a104a"
  },
  {
    "url": "assets/js/39.efeba239.js",
    "revision": "e80877a71ce314cfed4c5d21e12482ce"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.08fe56d7.js",
    "revision": "9e749394e0f0e2123e95ab84e6697bf9"
  },
  {
    "url": "assets/js/41.c19000ad.js",
    "revision": "a33c753e075c1445cdd9b110cc320cf4"
  },
  {
    "url": "assets/js/42.2b3b9233.js",
    "revision": "4a49f8b6b94159e27ae7c61bbc6d0c78"
  },
  {
    "url": "assets/js/43.c8b5f2aa.js",
    "revision": "9053946a4dcbea7a37ea4a051f788870"
  },
  {
    "url": "assets/js/44.47d80894.js",
    "revision": "c239507dbd79c6d3b8b214c24290eac9"
  },
  {
    "url": "assets/js/45.6a62db81.js",
    "revision": "1752bb1db13168e095e4ff1d162597c9"
  },
  {
    "url": "assets/js/46.d3bfc5c6.js",
    "revision": "29eb947b2abcdd16aae92173ea580b14"
  },
  {
    "url": "assets/js/47.fc817602.js",
    "revision": "45713ef949ad634bdc8cd925aaa0e321"
  },
  {
    "url": "assets/js/48.948fdb9d.js",
    "revision": "2b808d15446e3bba5198e8645601a389"
  },
  {
    "url": "assets/js/49.7ff10c1a.js",
    "revision": "6047bd8deb75d3ed6505f5b6bd9860b1"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.7ebadd67.js",
    "revision": "409d35eb9cdd65923a8c2406a02ebf34"
  },
  {
    "url": "assets/js/51.9b7bd61f.js",
    "revision": "5143ff0be37f12c45f2cfee97e42488b"
  },
  {
    "url": "assets/js/52.8015841f.js",
    "revision": "83744ae24e3b59eaa5548ea2f8bd965e"
  },
  {
    "url": "assets/js/53.e76a4334.js",
    "revision": "7e007a784d4528f947280794ece03022"
  },
  {
    "url": "assets/js/54.d8e603e0.js",
    "revision": "e31662a57ee1f203c150b222943c055a"
  },
  {
    "url": "assets/js/55.3bcc9eda.js",
    "revision": "21e6c0148950755660326797a9c33879"
  },
  {
    "url": "assets/js/56.e2fd0397.js",
    "revision": "77d1274a31255e75e2cf1ea3c79e5a3f"
  },
  {
    "url": "assets/js/57.3403c17b.js",
    "revision": "03091c942bfea3859d1e2b31a73658ea"
  },
  {
    "url": "assets/js/58.7fe2136b.js",
    "revision": "5948af8a0be225cbe34bb03942119b73"
  },
  {
    "url": "assets/js/59.34caea1f.js",
    "revision": "d1102bd94d899993c75e750f801ab1a2"
  },
  {
    "url": "assets/js/6.6fde3483.js",
    "revision": "baa738afd6a7d334a3e48d1f70c610ff"
  },
  {
    "url": "assets/js/60.d6e316f2.js",
    "revision": "f2beda339544765aa7feca8afbde41ed"
  },
  {
    "url": "assets/js/61.ff3840cc.js",
    "revision": "3e8d3537a00b1e09e1d5328f250d19d8"
  },
  {
    "url": "assets/js/62.010d029e.js",
    "revision": "2acfc7437737c9f0ac003065a9f6f371"
  },
  {
    "url": "assets/js/63.01d99200.js",
    "revision": "0c466faf654d7bc4f6606398181705ff"
  },
  {
    "url": "assets/js/64.f59193e7.js",
    "revision": "b84764a39b289bf7289ba3baca981058"
  },
  {
    "url": "assets/js/65.3acd93e6.js",
    "revision": "506a6286d82edf838eab423e74c3d591"
  },
  {
    "url": "assets/js/66.a7b89821.js",
    "revision": "09c0609453b8919c7a276a52fbf528d3"
  },
  {
    "url": "assets/js/67.061daa57.js",
    "revision": "3a8401a0f3b0c801515808ca126789eb"
  },
  {
    "url": "assets/js/68.6515afe3.js",
    "revision": "7528ad6a0ba6faf7c6dc459fefdf9ed3"
  },
  {
    "url": "assets/js/69.f5db9ea7.js",
    "revision": "ab6cd0b97074e3bfaadb402436b25d9e"
  },
  {
    "url": "assets/js/7.574f184f.js",
    "revision": "165b18725b95fd05d69422e261120ed8"
  },
  {
    "url": "assets/js/70.bab80202.js",
    "revision": "181d9d46d101f258b4393910244b459b"
  },
  {
    "url": "assets/js/71.76e83172.js",
    "revision": "2f8f4640c24df23008d87c7213ead458"
  },
  {
    "url": "assets/js/72.3b0ddd89.js",
    "revision": "eac1a245f9d9aba2b59c51f8260e0cff"
  },
  {
    "url": "assets/js/73.a4bd7eca.js",
    "revision": "4992ad4328156b986f5f905a7035efa3"
  },
  {
    "url": "assets/js/74.8b805f5e.js",
    "revision": "f80bc1e8a58d58d67f7162c192600ca1"
  },
  {
    "url": "assets/js/75.54bf6b36.js",
    "revision": "1c2865ac2b1b37aba5f02917a30e729e"
  },
  {
    "url": "assets/js/76.bfd73f27.js",
    "revision": "7cb06ebf7d0ad19bffcb5fb42ae29809"
  },
  {
    "url": "assets/js/77.2421ecf7.js",
    "revision": "80e3676fcf8372baba89df2e6804918b"
  },
  {
    "url": "assets/js/78.f99bee45.js",
    "revision": "e83a5685d3d41b77df4fdf0e5d299191"
  },
  {
    "url": "assets/js/79.e707fb2a.js",
    "revision": "aec99afdd99efb252fd9a3f4f5441596"
  },
  {
    "url": "assets/js/8.bcc47ca8.js",
    "revision": "70cef73760d540451394a2e68b511040"
  },
  {
    "url": "assets/js/80.bc8c9579.js",
    "revision": "863adf552aae9cca867624d4a8d2361e"
  },
  {
    "url": "assets/js/81.7d863e9c.js",
    "revision": "df4d4cf233b8a43ce40ab7ebe5a44305"
  },
  {
    "url": "assets/js/82.5c6f11de.js",
    "revision": "156bb282b701dc481cb12cdc5a9537a0"
  },
  {
    "url": "assets/js/83.5f198f7a.js",
    "revision": "9ecb60f84664147c7eb65241bf455530"
  },
  {
    "url": "assets/js/84.27d41b72.js",
    "revision": "c911bd01b2cbee890a649aaa6fab1b92"
  },
  {
    "url": "assets/js/85.b67e79f2.js",
    "revision": "0e776990766e1159ab3bd171ad1e905e"
  },
  {
    "url": "assets/js/86.2a5f9f85.js",
    "revision": "ca929e60f8d5289fb666dd7931c620a7"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.da06d019.js",
    "revision": "8d884c09dc6dced1cd23d04e5b0d6fe6"
  },
  {
    "url": "assets/js/app.c34ec459.js",
    "revision": "a351a18cd64c369dd3ff6eea15c942a4"
  },
  {
    "url": "compiler/ast.html",
    "revision": "ba4cb5e5b0133dd6d7c67a854a27d62f"
  },
  {
    "url": "compiler/binder.html",
    "revision": "4374a8635a1166e77fea6ca3040b9312"
  },
  {
    "url": "compiler/checker.html",
    "revision": "64927d28abcb81817c500ead80a62a83"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "00a6c2675dcc9740d368c3389408b4a4"
  },
  {
    "url": "compiler/overview.html",
    "revision": "ae79e705b0c93bb5d631a4f0b3725741"
  },
  {
    "url": "compiler/parser.html",
    "revision": "d7807d316431856a5cda60586cfe7932"
  },
  {
    "url": "compiler/program.html",
    "revision": "75cca0f5da0ff3ddbc09d07f80db31ad"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "2ae0fadbbe402fb04ced1415cff9b6ce"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "b68b38da2191a9967be25566ade6f621"
  },
  {
    "url": "error/interpreting.html",
    "revision": "6d973debb38ea1aa93377e63ccc68e52"
  },
  {
    "url": "faqs/class.html",
    "revision": "118f87a670c53baa51adb769af1db0d2"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "160c263d0d60dc8c4164926dd9fa572e"
  },
  {
    "url": "faqs/comments.html",
    "revision": "583626c022351b27ccc1765c930c7767"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "69f8a9e0a0b8ca1417c60c01da6aa3c9"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "ab5495d30ee7154ecce32d9101efcc7e"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "8ee1a120c37c14d9455d0b7d5fb4b3b8"
  },
  {
    "url": "faqs/enums.html",
    "revision": "a0f9df287930e94864691a9ad0c8be57"
  },
  {
    "url": "faqs/function.html",
    "revision": "a9d500bed1400bf8ae0229d0112260ed"
  },
  {
    "url": "faqs/generics.html",
    "revision": "e8a690f1afe43be15b00755f45bb8439"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "5388e7e1c9d22791add9f70f326b6845"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "9db6c2029380c5f798aa810eafc4d71e"
  },
  {
    "url": "faqs/modules.html",
    "revision": "70721aec37b540f0220e5850647000fd"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "87fcff091b30973b443719da84ace62b"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "55eb79b2565f9882abca12df69e735bc"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "50a9dbd2fce9a31ad11b196e004ef445"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "89dd9f606bef9bb2c1feccfbf0cfb27b"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "a257a4d9469fc26c7b5e4111fa2a91a4"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "74cd5a6753f1e327e1e0e2141d2696af"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "45dc28c359387c51ac5312b2edaa0dfa"
  },
  {
    "url": "jsx/support.html",
    "revision": "bb41d38cc566bef6f102ea71b510c5d0"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "3ba59d88afce764277ec9e67ea49b26a"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "541889fb20559c4600a8a27cf312aefa"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "be429c57623e0be7b7f2972fe330fdbe"
  },
  {
    "url": "project/modules.html",
    "revision": "68f47f79b2aac00ea0c1d77a373e61bd"
  },
  {
    "url": "project/namespaces.html",
    "revision": "0337d68f06b6c7911cde625cbcb1c9ee"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "5daa37dcc377b5b8e43aee2f7b90e359"
  },
  {
    "url": "tips/barrel.html",
    "revision": "9252398e5d4194e98b66a20e6d2bbea2"
  },
  {
    "url": "tips/bind.html",
    "revision": "a877f50a934a25ffcaa34da24078a861"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "9f5f6115c1b9e1dcc5711dcbc775cc20"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "2622dea1835e08dcfbef7c677312476a"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "af1e513f9e9dfe91590b15ba0a9b2eb8"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "80820b7dd6df1905cf6d6d67dc474a32"
  },
  {
    "url": "tips/curry.html",
    "revision": "fc67a44daa8223dea34cffc3d36576ee"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "4d150d37e98ee377b9650db6ea29d4f0"
  },
  {
    "url": "tips/infer.html",
    "revision": "fcd715e4092fa457a5f0fe6ae52330cf"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "a3fa0cef08b3bba75a238e962f5dcba0"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "8f558e84fd4400b79d766e8c89117d13"
  },
  {
    "url": "tips/metadata.html",
    "revision": "0202703414b1ead158bb22bcfd8a1ec5"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "ac9bbe0b0b04ae5dce54b0070809009c"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "561cd90012041fb8cd616954dca25cd2"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "0913f675ea9601463da799a2b15d232d"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "22700b8ee26a8b79de0efe49f0f7b8bd"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "4775de1f5f29caf50472f154ddfd4604"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "5d5b106c747d6bd04d25a9a071622d93"
  },
  {
    "url": "tips/truthy.html",
    "revision": "76955633b55ba7cfd178878d04fb1bf2"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "f17e6faecfb90536ceb50c8350d6f5ba"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "f56a56e0186b33f6cee5711692ef1412"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "6bd4540b885f4252632bbfc121b85d7c"
  },
  {
    "url": "typings/callable.html",
    "revision": "644da346da3306d9f0e06e8bcd74a4bc"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "facda63af1db25c176dcc77f5a77e1e3"
  },
  {
    "url": "typings/enums.html",
    "revision": "1f3b9468a2a3775f782e1ba75bec21ce"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "4206c217afa3882d1963168bd200e1a0"
  },
  {
    "url": "typings/freshness.html",
    "revision": "b192f60b1c36c79810e2db4ecb58737a"
  },
  {
    "url": "typings/functions.html",
    "revision": "40bbefecda11572ba3b4b0ff16911e58"
  },
  {
    "url": "typings/generices.html",
    "revision": "97c1a2e5bd049d7a28bae456394509be"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "8c0d8505d27053d8cd55ea7a7d05ed03"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "818e04873ca73982eff83872a656de20"
  },
  {
    "url": "typings/lib.html",
    "revision": "7853c31e6fcad590d33e9a231c9c129f"
  },
  {
    "url": "typings/literals.html",
    "revision": "4ad42bc73786860341394d75c4d6593b"
  },
  {
    "url": "typings/migrating.html",
    "revision": "72865c59efbfe9d41dc83c9d21bff7e5"
  },
  {
    "url": "typings/mixins.html",
    "revision": "49d6abe61254ad62ed8948c9c551cbfd"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "18bf39f2bccbbf63431ed82d0af9deb4"
  },
  {
    "url": "typings/neverType.html",
    "revision": "8b08c26162e5f5074e83d26c316ee66d"
  },
  {
    "url": "typings/overview.html",
    "revision": "7c692b46e8879bacc4a4be6daffd33fe"
  },
  {
    "url": "typings/readonly.html",
    "revision": "2c47f4f11e6ed5a7b6469686f266beca"
  },
  {
    "url": "typings/thisType.html",
    "revision": "eaccd0d50625c3669ba185b6a96b8ede"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "bf8d5e39babc032a6dafc45b378912aa"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "80cf2ab7ece63245d7a5c11c7a072a20"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "5a9a3c8a6af70fd84a798177e281e85d"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "2726c6dcef0776f4c4588c771acdcbf4"
  },
  {
    "url": "typings/types.html",
    "revision": "f955ce7d05222ff0399153c1ca5fe45b"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
