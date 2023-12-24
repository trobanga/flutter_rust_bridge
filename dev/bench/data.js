window.BENCHMARK_DATA = {
  "lastUpdate": 1703417357784,
  "repoUrl": "https://github.com/trobanga/flutter_rust_bridge",
  "entries": {
    "Flutter Rust Bridge Benchmark": [
      {
        "commit": {
          "author": {
            "email": "5236035+fzyzcjy@users.noreply.github.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a56090f1b2fa819be05dd7a158fcd5a93d38c84b",
          "message": "Merge pull request #1477 from fzyzcjy/feat/11600\n\nAdd frbSse bench test and fix frbCstSse test forget to be sync",
          "timestamp": "2023-12-22T22:15:12+08:00",
          "tree_id": "bfcb9ce6a8f666520c62549b36c0eb1b06342e99",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/a56090f1b2fa819be05dd7a158fcd5a93d38c84b"
        },
        "date": 1703256678238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 18.996207531287865,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 209.1869150779896,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2235.994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 11.535502736747395,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.55634325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.4530914607183067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.24198402243436748,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.016213363439199886,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 374.5057105410972,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 36.12531835341293,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 49.84672133190439,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 209.36407411284412,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.63651725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.904003797998101,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 134.392399834779,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.062320948753581025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.298488,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 144.04389770152153,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 34.58065910505567,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 78.30742727379507,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1998.5104895104896,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.68530725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 20.359830351484426,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1962.4730134932533,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.588281045768551,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 6.6636236118839065,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 159.02122754014945,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.908904,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 23.38500491996064,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 784.637,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.4094595,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 67.4405111897762,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2014.438,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.90711875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 23.733335683316295,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 752.2965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.837843,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 15.792596037019814,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 486.98273092369476,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.272321,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.900641241984474,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 897.34725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.931463,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 24.0375125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 802.06925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.523328,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 83.15790347346143,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2823.8375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 5.702269021029213,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 95.73168858596524,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 3192.02125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 6.554383752636556,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 8.870936,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 168.98575524928313,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.3663915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 63.83259158926729,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6596.170658682635,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6096895,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 62.751001784199595,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8136.8,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.702064,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 68.36821224039191,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 12796.466367713005,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.107717,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 39.79220005954153,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6486.228739002932,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8028805,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 321.4244511407662,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 29613.422535211266,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.533304,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2166.45,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 256766.77777777778,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.333294,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2503.194,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 296555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 18.56351460100454,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.30306446653685,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2066.356,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 25.98351348542327,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3620608662079657,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.2966305764441922,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.1721286556557427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014908341694093719,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 180.78974961583657,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 27.355399934347304,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.849113485762043,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 166.52535176088585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4269598410822187,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.5632077183961408,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 120.55252894942102,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.05266205564438636,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.2309515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 129.12377450980392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 27.08404089647234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 44.87827043037293,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1743.2038327526132,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.48100175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 19.696971424228607,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1906.0869565217392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.040977709473091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.8620260844926917,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 65.56162722087458,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.60520525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 18.55679915640696,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 625.73475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.98422575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 46.00303594838888,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1786.6979010494751,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5937695,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 18.131065951472387,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 600.1475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5640625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.248352634060513,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 444.1811946902655,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.88814775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 22.854683931645084,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 792.14175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.471413,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 21.696809425524595,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 684.073,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.936372,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 74.87607092304253,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2431.396,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.276308,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 88.95221027479091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2852.285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4936484035462373,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.823831838084081,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 121.28829546150548,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.90885575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 74.5683694991599,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 7581.812734082397,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4760156708707777,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 54.08939467573843,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5073.1525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.48185692105417105,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 60.825283494330115,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 8089.461077844311,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.89844625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 33.269869817017835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4999.653846153846,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.54748975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 277.0853522695628,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 29537.369863013697,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9710837644581178,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2088.838,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 223654.83333333334,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.1332358667641333,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2254.371,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 274342.75,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 45.47418293889004,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1041.7425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10443.07,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 40.140368482318465,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.9639035,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.53479,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.3250530679118379,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.023745469244063632,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 661.8818663136996,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.92838724555041,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 49.14334856749718,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 265.71436163146006,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.151478,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.598685,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 186.03255943020997,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07941419604702965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.4391727804136099,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 181.75302752293578,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 42.953353521036014,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.22516890188565,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1797.7097933513028,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.167553,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 24.940547225622193,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2219.655,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.896850904175345,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 10.516926960088343,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 96.86512664051529,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.579863710068145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 48.138741363914086,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1516.1911544227887,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.439593,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 105.32886565928379,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3318.3094405594406,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2002455,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.546835625315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1111.7635,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2550675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.809363143821137,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 879.10375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.121342,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.10331027882901,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1380.754,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.5295852352073824,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 30.973754841858053,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 898.6275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.247264,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 111.53057453242245,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3414.91904047976,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.875968062015969,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 112.02531078508231,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3383.9820089955024,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.037878,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 4.2966440275169795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 280.0053385782523,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.98505375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 76.49421189959942,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 7256.165584415585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.8692285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 66.7330931717701,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6321.4350282485875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.9244635,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.34273558674751,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10074.546610169491,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.312622,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 42.73889122217555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6931.88418079096,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6205935,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 357.3770807779919,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 37977.05454545454,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.260524,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2603.80875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 277415.5714285714,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.8124631406526444,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2618.757,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 323018.8333333333,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "distinct": true,
          "id": "229db75f5651289bf5a7468b368e04ce4d1c0b3d",
          "message": "Merge branch 'feat/11549'",
          "timestamp": "2023-12-23T07:30:50+08:00",
          "tree_id": "d25952a1a55a3abec4cb7a7066b9f90dd86f5d33",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/229db75f5651289bf5a7468b368e04ce4d1c0b3d"
        },
        "date": 1703293575904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 20.967930514573254,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 208.58919032156697,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2259.378,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.01683016489060393,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.049196490758035095,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.027677807654027404,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.21862381698073738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.1342995,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 12.08455486942756,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.54968175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.4494449888193764,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.25129663957047826,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.016118160346242284,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 378.1569294762715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 35.63100603944344,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 49.20775514221041,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 215.99773218142548,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6561435,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.8690020654989672,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 136.35612038265484,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.055283737906922994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.3076375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 148.59346208967446,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 34.627053792482556,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 77.86708195444812,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1979.1177052423343,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.683931,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 20.32734,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1946.0014992503748,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.5206135674478043,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 6.707475350459454,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 68.35530947742575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.89200875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 24.281137148578566,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 789.27475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.4410155,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 69.679008,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2028.678,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.94371975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.412412700698393,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 716.294,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.92242275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 16.281757379895065,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 476.45369237046106,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2810355555555555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.60305808776765,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 906.22725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.9834265,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 24.335395655323897,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 779.578,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.292585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 89.68861465294576,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2606.3575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.771615,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 91.91970903101839,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 3249.2413793103447,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.776762,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.435572,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 194.0301071118402,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.204952,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 70.73177889576884,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5972.299450549451,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.69742675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 58.90766464634748,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8713.628,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.63091775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 74.5092879256966,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 11231.911016949152,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.258427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 35.311145510835914,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6817.6725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.73606075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 275.58803659394795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 32827.82089552239,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.220974,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2418.627,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 258824.88888888888,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.303905,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2489.84,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 287158.25,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.55413536146616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.54433371005857,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2053.362,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.016674470891615938,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.04525990586422028,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.027800299895748875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17146003432743875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.0247945,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 25.972067111653637,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.36585740977984726,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3006786519566258,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16642647656142232,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014273405985726594,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 181.68650072674419,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 25.837495316960997,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 28.712903411048583,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 164.1662152179266,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4294315096454792,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.580070709964645,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 120.20303593928121,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.053214339986159424,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.228489,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 129.07868937048502,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.693716299183173,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 45.27114692500962,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1649.0981038746909,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49978575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 26.026217520596695,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1914.7991666666667,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9668052608080813,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.7386155750544985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 62.748360784313725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58061375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.140410376716986,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 564.90875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.989471,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 44.9437744749021,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1750.6079460269866,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.604641,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.83981916131108,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 600.17575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.548529,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 12.731280977954622,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 393.2898435953277,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.8732215,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.441149073680094,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 827.225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.466761,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 28.209723902760974,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 715.95125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.936244781877609,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 74.74122774342547,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2431.936,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.260665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 90.83054298642534,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2898.00875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49484048244852313,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.6748294125852936,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 126.24455083784805,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9134515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 76.26098860441024,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6032.593516209477,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4882791615187139,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 53.5353359726086,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5096.92,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4721464596821222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 62.27416451670967,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 8694.395209580838,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.8804585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.994271548691835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4760.655,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.55925525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 300.7087872185911,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 29609.652777777777,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9274780362609818,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2088.592,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 215330.1,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.076067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2201.315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 298992.44444444444,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 47.76309789578682,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1075.7785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10515.59,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.023907066994023233,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.0576348648473027,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.02683212418472254,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.24318661439412873,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.383623308188346,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 42.680032436354324,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.99078425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.546634,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.3302055499696146,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.024375791804993666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 722.721098265896,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 43.468832862421216,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 49.215315714356024,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 264.29228329809723,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1671675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.640595,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 184.8775020754543,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07708285192291715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.4541055,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 181.4436819471132,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 42.35706722012792,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 69.21983802865647,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1809.8065099457503,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1972825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 25.0695875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2224.15,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 7.0053415622580975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 12.290689314828128,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 119.13789611627352,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.5896219551890225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 50.34203885635887,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1545.119940029985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.483136,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 106.63223447106212,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3358.67916041979,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.167305,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 37.7766527918401,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1151.3145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2549448725275638,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 29.203121082053777,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 899.914,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.262751,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.022294410822354,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1363.651,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.697036,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 31.050084749576254,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 904.55675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.071912,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 111.33816556760587,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3453.991004497751,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.616759191620404,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 111.13507637417773,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3370.8455772113944,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.8698908150545925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 4.036305472770896,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 280.5329693406132,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.62532,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 72.66228670170639,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6897.191558441558,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.80445075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 65.51312,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 8616.978813559323,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.90233975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.47639313738529,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10053.733333333334,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.288273,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 42.00209995800084,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6650.5192307692305,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.422061,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 350.81982300884954,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 36693.15517241379,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.190506,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2620.5075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 279850.25,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.451718774140613,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2659.26375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 312377,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5236035+fzyzcjy@users.noreply.github.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "791551a74022a745400b92ef1380db14f498ebe5",
          "message": "Merge pull request #1479 from fzyzcjy/feat/11602\n\nAllow skip all-contributor for local script",
          "timestamp": "2023-12-23T09:18:33+08:00",
          "tree_id": "03c84e864997c99576e224a84c9d8f6364d1acba",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/791551a74022a745400b92ef1380db14f498ebe5"
        },
        "date": 1703295843786,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 20.604001516987484,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 206.71499023939177,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2215.562,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.016624592,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.04717145135374243,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.026893180184005133,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.2127524091919229,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.122491,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 13.611983774807394,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.5269955,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.39772625507609,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.24546623776106674,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.016005919189977805,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 352.01566349876805,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 36.947350919973395,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 42.54553383394669,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 203.26930894308944,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.65338975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.9471535264232367,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 131.03204986760812,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.061689136349815606,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.288439,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 130.46340481803026,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 36.700798238370496,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 72.71442594343053,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 2103.4395373291272,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.68027975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 21.733066835665188,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1803.656671664168,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.844808579942677,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 6.221100697695396,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 60.56763058289175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.9149705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 23.119475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 763.58725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.584709,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 60.95015528427785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2011.738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.9150949235041737,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 23.971112158883127,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 760.9475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.78511975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 18.06340904028446,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 490.573441108545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.0906807337591056,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 28.83761729906161,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 823.279,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.8075015,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.317616753107856,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 702.3245,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.394624,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 79.00738634119367,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2825.46625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.442065,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 97.25507297970807,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2861.92625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.828296,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.16346,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 169.95024,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.182137,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 66.80329633160112,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5812.142857142857,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.66686625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 57.957421729005546,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8212.014981273409,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.62087525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 73.94046148846279,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 10792.609137055837,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1136444431777783,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 39.71371821570446,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6112.844943820225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7959855,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 301.00830765107867,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 28663.773333333334,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4801875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2104.803,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 255341.88888888888,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.223925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2420.475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 269351.28571428574,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.372701018391854,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 202.54908942924,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2023.554,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.016999883889500755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.04541924986374225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.02626214894141975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17118245915270164,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.0185895,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 25.256936113250912,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3514189557779698,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.29050475118981733,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16168708406503327,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.01409083169715938,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 176.66928716544476,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 25.987915643394533,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 28.313528129335484,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 161.08851481958763,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4328376563655523,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.5936239531880234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 120.6817397512941,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.09800406487340142,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.3456375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 129.76426861534586,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 25.68099230858126,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 43.62627606666085,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1725.5025862068965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.510095,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 20.93160054719562,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1867.3988005997,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.023618653302696,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.868406257708834,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 67.35304418103448,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.61070625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 19.026982027398272,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 628.7145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.97837175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 45.440566992912586,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1803.5247376311845,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.598637,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.83958816298582,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 601.663,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.57145725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.17573628345044,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 444.56164994425865,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.88104275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.98721609268333,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 828.40175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.5326545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 22.624760752392476,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 705.78325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9311020344489829,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 74.05938774760207,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2364.639,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.276639,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.31142970927917,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2838.34625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.48939009836667535,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.7345271327364336,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 131.20794965220273,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9773705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 72.0753287038669,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6654.93006993007,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.47127521091777824,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 55.22010779892201,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5088.3675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.502014004125767,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 60.561468770624586,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 8172.7784431137725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.920194,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.52448041079641,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4728.092657342658,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5977605,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 292.8510158013544,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 30975.51388888889,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9302912848543576,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2050.113,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 213952.55555555556,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.105991,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2201.1675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 257444,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 46.8761247122829,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1094.834,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10194.125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.022268603455462794,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.056427895548576835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.026392224189891365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.24246157682922656,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.3875975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 42.54768438743166,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.9857785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.546743,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.33020415867918335,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.02426258380589933,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 685.0123287671233,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 43.55116172723908,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 48.69669596552312,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 269.363367003367,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.221066,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.59898,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 185.05954128440368,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07688125646237487,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.4476835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 181.32361990950227,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 45.06717140990108,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 70.75407690402915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1881.4844778927563,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1993175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 26.6177,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2331.591,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.823975979664603,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 11.213384241894158,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 108.27311606756172,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6303686848156576,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 50.41450315555006,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1551.5419790104947,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.5487925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 108.43499059392636,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3453.8140929535234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1570735,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 38.04662562699498,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1150.9985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2372015,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 29.07083200417597,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 911.6715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.104893,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 45.052977038091846,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1404.924,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.885126,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 31.391066731765708,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 914.983,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.205894345579241,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 114.54539318258522,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3557.7727272727275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.7456779407415444,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 113.56595495758994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3406.9775112443776,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.0062,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 4.174584,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 279.34483242182023,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.052049973975013,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 75.05319415150323,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 7021.863636363636,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.80982375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 68.14880188997637,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 8707.631355932202,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.84127275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 68.83240184916856,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10066.175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.212624,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 43.30544805641555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6984.89010989011,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.5951457024271487,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 367.7660280029477,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 37708.96296296296,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.446042,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2683.79375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 288294.25,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.7228089578932817,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2572.30875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 318431.14285714284,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "distinct": true,
          "id": "c03314c98c7c518dbe0c8c3f73ea313d66875172",
          "message": "chore: doc",
          "timestamp": "2023-12-23T17:09:31+08:00",
          "tree_id": "06842723846daf562c91e253cdb511e50ce232d2",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/c03314c98c7c518dbe0c8c3f73ea313d66875172"
        },
        "date": 1703325707322,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 18.86986054111567,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 227.9816808114262,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2087.181,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.019205884375161752,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.04376254041247492,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.029241783970758217,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.19659290481549876,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.2436225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 11.300032205027374,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.5704845,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.44628746241628126,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.255893632,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.016320924438796534,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 372.78028326500186,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 36.54237009427757,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 49.98547935619314,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 208.91926049717986,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.66445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.8731593134203433,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 130.01269265639166,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.055575872860877465,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.284165,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 132.08095752111245,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 41.43763726018315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 76.62965517241379,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 2077.845275181724,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.68305825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 22.45206,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1834.839580209895,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.8848568246989656,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 6.720646793753843,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 68.82354358074396,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.90679825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 27.6236125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 713.16875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.7355111322444339,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 60.16776388320156,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2225.51,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.86154325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.929379050139037,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 717.9315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7830333333333334,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 17.15151424242879,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 496.2839651518719,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1006770398849033,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 29.665438838244647,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 842.67375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.950032,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.637597377419013,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 720.563,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.522248,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 80.44303998728039,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2943.3225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.477879,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 97.78131576539482,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2863.3575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.82713775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.57341375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 164.26622898104105,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.4202365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 64.01486754653983,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6448.0467032967035,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6391235,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 59.70852059491266,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8831.419491525423,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.680879,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 75.40271470122978,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 11683.448430493274,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2533315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 36.39347521255258,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6382.662686567164,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.805781,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 274.43135090382225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 32189.89230769231,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.199515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2395.417,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 265472.2,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.30128,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2489.326,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 292092.625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.593259601685098,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.36004919544942,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2056.783,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.01730531997404202,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.046261831861214506,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.026765993435499576,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17248740504045343,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.041982,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 25.44830833047041,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3644270805203259,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3098716976405472,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16785197581081246,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.01430113998569886,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 181.1896910952079,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.948057722624196,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.337572610455904,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 162.35189544605893,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.42400648862680446,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.5495667252166374,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 122.13099893352293,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.05367328124857406,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.247322,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 127.61210235570512,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 27.080510195791696,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 44.46898345784418,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1711.234388366125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5046431647076095,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 20.434507523939807,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1888.3305847076463,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.061098131924642,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.864869820315365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 67.52310860538132,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.579932,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 16.301528,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 562.498,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9938415,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 45.67321408482394,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1757.944527736132,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.6126375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 18.063800489596083,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 599.13025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58143825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.213295076877078,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 434.93195785777,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.878697,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.87015421415182,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 801.29225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.5223725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 22.933221534227727,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 705.54375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9750752624623689,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 73.99037154092095,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2419.409,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.250547,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.76361694553222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2855.285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.499727171815888,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.7452416273791862,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 131.04641683103222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9644915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 69.81905838542359,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5869.752913752914,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49547792139696756,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 54.97057060330263,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5070.6825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4996176950586838,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 60.507290217194026,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 8017.416167664671,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.893156,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.97898893384683,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4575.705069124424,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5704245,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 288.4731413837559,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 29550.090909090908,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9285535357232322,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2114.903,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 227969.55555555556,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.050625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2229.214,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 264832.85714285716,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 46.092228432116656,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1031.579,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10102.142180094786,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.021898421824812626,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.055030634036963906,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.027761746972238252,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.23741337233602977,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.3606665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 39.193556605067705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.977187,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.53488975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.32361536060638774,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.02377910380976717,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 642.1534510433387,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 39.800640783267994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 43.87071442672575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 258.0579280092891,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.120661,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.55549125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 182.3140127388535,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07554167379040604,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.394383,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 180.81257413997628,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 39.79038675791819,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.69227645028091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1768.202296819788,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1375135,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 23.913191629360686,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2160.367,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.367654924734469,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 11.195255474452555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 95.47696787436155,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.495640252179874,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 48.32696244163849,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1480.9305,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.414811,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 102.84717880387434,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3326.8710644677662,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1450585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 37.07556239550084,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1117.199,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2450815,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.06224362653824,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 875.50525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.9703525148237426,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.63159013153701,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1375.0035,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.664336,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 30.888623390415503,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 899.25575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.24046031965476,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 112.30514267115113,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3419.935532233883,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.058738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 113.25241490340386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3239.1244377811095,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.21478,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 4.295296,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 281.29645587213344,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.98024875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 74.134374886722,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6747.185064935065,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.849092,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 66.93383711721225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 8604.684,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.829683,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 66.97945205479452,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 11353.242424242424,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.118728,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 42.0920645333224,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6421.535,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.422766,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 351.9894865954091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 36863.44642857143,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.406836,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2610.427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 279693.75,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.669755997683002,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2577.9425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 327255,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5236035+fzyzcjy@users.noreply.github.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2be4044320645c39186701ff20acbd48a5013508",
          "message": "Merge pull request #1483 from fzyzcjy/feat/11610\n\nFix benchmark dashboard",
          "timestamp": "2023-12-23T21:02:58+08:00",
          "tree_id": "3432262c19850f2145cf9940372829572098a730",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/2be4044320645c39186701ff20acbd48a5013508"
        },
        "date": 1703338975342,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 18.61845914771203,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 222.23630946265283,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2066.115,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.019164694971252956,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.042278648661770814,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.02895405865978981,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.1917686338634037,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.212864,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 8.68353732399564,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.54470166834651,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.43917548536700285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.24671657152909143,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.01625761018903396,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 390.0528471138846,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 35.888727390180875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 46.60733594332588,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 209.34404437931755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.637291,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.856087821956089,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 128.9082490033732,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.05427676146298696,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.2662795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 139.2124796880078,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 33.92176184257391,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 78.23505711156314,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1931.0067567567567,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6627115,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 19.92231267976405,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1945.1724137931035,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4328395959468216,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 6.666065613657347,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 91.44925018288222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.84693675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 22.335074819401445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 756.629,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.358739,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 65.15024580973464,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 1978.880059970015,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.89699525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.54738548937981,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 701.908,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.816784,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 15.320990074059555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 461.8340653045637,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1838895,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.933011803858353,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 881.6845,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.8097555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 22.80786149017314,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 756.949,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.223489,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 78.82630354007594,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2850.93375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4452075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 97.59476083012522,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2844.72875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8091595,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.144401,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 162.26371654955898,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2024825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 69.64472233596875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5869.233516483517,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6675965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 58.112142215004496,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8573.378277153559,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.61178525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 72.86241219642801,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 11094.622881355932,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2610615,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 34.884823707996965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6508.6,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8698495090364282,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 267.98981642771,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 31375.72,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.232406,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2360.013,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 230552.66666666666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.461711,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2233.54,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 278023.8888888889,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.607425098143725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.22608153078204,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2054.996,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.017297882474053176,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.047465145857604564,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.03469762865302371,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17187277017982464,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.0211955,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 25.213163733548484,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.36132129981555594,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.29395314941768663,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16460209056634845,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014299893985700106,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 178.7822472512738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.18902958006521,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.504373995013793,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 162.24929017603634,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.43459254053637436,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.5741989629005186,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 120.10981657405748,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.053667242158318945,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.241449,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 129.23948658410734,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.40385757851796,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 43.72375497354729,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1708.7523484201538,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49415375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 19.61858,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1898.9587706146926,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.0642944506659924,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.8251101439817385,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 65.05330948121646,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5844225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 16.077928,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 560.25325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.987735,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 45.05081879672481,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1757.2398800599701,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58879425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.324404148069927,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 596.64725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.55950675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.023273953452094,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 434.5434971726838,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9298295,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.060637424203218,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 788.8055,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.4349135,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 30.135815641843582,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 711.6705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9108955445522278,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 74.58489160396334,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2473.378,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.26505,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.30744927020292,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2865.6925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.51399475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.7377573811213094,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 124.39756835076226,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9126905,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 70.65257937020485,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5908.083916083916,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.46945940610811876,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 53.554006783972866,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5448.99,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.47613318719785214,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 60.88105237895242,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 9318.465034965035,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.8919015,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 33.155906083455704,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5518.76,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.554352,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 307.78670485378353,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 29783.676056338027,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9581882709058644,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2108.097,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 218558.2,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.08438,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2227.987,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 272973.3333333333,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 46.69659905951646,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1057.35,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10488.137362637362,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.021868918456262165,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.05698212936035741,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.02706283318201171,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.24210490143158728,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.351719,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 42.143158160900164,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.973239,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.63313675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.41749845570317323,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.023587255494103187,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 666.022977022977,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 43.33567342693708,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 52.438673308862086,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 266.03312051077415,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1482425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.6137375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 185.78584678167317,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07491786933877302,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.467855016072492,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 184.53527312654407,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 44.96322025134327,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 70.83541703559412,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1777.5301953818828,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1986175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 24.697734418124654,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2262.485,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.49464841238399,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 12.273954107777376,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 102.57172162675009,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6810199094900453,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 48.978979346840774,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1514.5674662668666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.600985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 105.08184586308273,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3351.1079460269866,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.251261,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.973252213982285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1140.569,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.3212485,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.825823643410853,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 896.0545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.20642,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.69082327776615,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1407.746,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.905435,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 31.284328161569817,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 914.52425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.054701458973906,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 109.33637663623364,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3545.9265367316343,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.7031669726247705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 114.1706878552372,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3418.6221889055473,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.864192317903841,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 4.13187,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 290.29860812168175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.7127525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 74.47450791771496,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 7309.811688311688,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.89462675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 65.84200026599282,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6318.232,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.92703075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.89387290208033,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10037.5875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.155967672016164,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 43.77569864720541,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 7259.225274725275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.327749,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 365.756114852889,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 39141.269230769234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.30659,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2665.4775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 284131.125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.586442060168455,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2706.5575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 332781.71428571426,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5236035+fzyzcjy@users.noreply.github.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15c27036a03da4d74d25702fb14a6e391df55bee",
          "message": "Merge pull request #1480 from fzyzcjy/feat/11605\n\nFurther improve code coverage by adding tests",
          "timestamp": "2023-12-23T22:56:32+08:00",
          "tree_id": "50e413b0ec553f46c6a7cc85d13ee66001adca42",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/15c27036a03da4d74d25702fb14a6e391df55bee"
        },
        "date": 1703347341294,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 20.610023217308456,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 206.80314394328573,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2197.971,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.016658622641718954,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.04666743862666049,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.02688032768415615,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.2111217957879166,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.119745,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 8.283609660331095,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.52471625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.46329174902207265,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.2524040539693429,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.014562980534602993,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 402.5377339504931,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 36.3188784775187,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 37.4639318160532,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 215.73562722467912,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.57106375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.0103604948197527,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 128.8735342828751,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.048360354166834915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.3398195,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 129.223191315806,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 36.5903951701427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 73.61819051825677,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 2015.0654582074521,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6427955,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 20.4927411885146,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1856.804347826087,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4701044879694365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 7.453471818493508,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 68.14108548260707,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.84546725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 22.216158838411616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 741.34425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.4720425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 59.49156028797871,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2091.867,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.84529325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.631569671119884,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 696.52375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.82625975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 15.348077313458806,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 490.5945,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.0870705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 28.6749923500612,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 866.5545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.724927,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.996146027941297,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 709.61025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4146170484455216,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 78.76293272627365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2873.67125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.455612,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 96.93996974012104,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2849.165,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.79998825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.84365875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 165.4274786260687,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2516535,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 66.74751698902247,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5824.876373626374,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.673573,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 57.82962356313434,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8436.887640449439,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.63669625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 75.19858764519536,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 10878.944915254237,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.213913,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 34.31128450972392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6521.5225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.767371,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 267.3104186170924,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 30941.493333333332,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.201413,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2256.858,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 229358.1,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.494385,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2234.148,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 303253.875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.15289816214108,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 204.96966280619043,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2042.254,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.016659056475011414,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.044922541865232375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.026280818191200386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.16760095697883565,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 0.9947585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 24.884015776442336,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.34872579002787973,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.28591025802836534,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16318074064325186,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.013861777430691113,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 169.75768120862332,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 24.749928844559392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 27.844294704015148,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 158.85219601302518,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4139062948874964,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.540844,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 114.00307985216709,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.05189334090322658,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.209657,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 122.0871667699938,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 25.915735869593387,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 42.43042620446783,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1674.789958158996,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.47899234628556137,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 20.02909826721386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1872.7016491754123,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9298983715517541,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.708252311492192,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 63.222784169932986,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5583435,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 16.006719983200043,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 551.067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.043757,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 47.8888044459222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1811.8793103448277,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.57803,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.97610519115847,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 582.835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5300073188582581,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 12.764034502853363,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 378.84586466165416,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.849116,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 22.50527820777434,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 780.1005,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.37178075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 28.57751551360262,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 680.099,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.8671300664349668,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 71.34019319613607,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2334.722,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.241278,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 87.74160577189899,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2804.365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4878853649785281,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.6284569357715322,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 130.49006150857883,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.87813625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 77.0466098686546,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6394.4058441558445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4515100483386774,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 51.353322896677106,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4954.305,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.45801854476122505,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 59.70819583608328,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 7631.508982035928,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.8856266666666667,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.212976,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4651.764411027569,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.55067375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 287.83390641351474,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 29604.833333333332,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9411850294074853,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2055.489,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 215146.8,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.132113,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2211.659,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 265555.55555555556,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 47.42255260532941,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1050.779,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10286.77,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.02189396595621207,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.055864108882717825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.026475301688915206,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.24151294067896475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.3545715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 38.63218790442526,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.9617505,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.54424175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.3228677564845468,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.023639977744090004,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 650.8188028627196,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.24327222485719,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 49.52778465653014,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 256.7284045693749,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1307115,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.65669125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 183.72971481140755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07477418530812933,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.406186,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 182.36651583710406,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 43.430544396430044,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 68.25342115141794,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1864.7213420316868,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1891875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 25.02594379244966,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2195.242,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.618300225352672,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 12.321504700649342,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 101.32377526723745,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.668130415934792,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 49.23181414548684,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1533.2016491754123,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.53025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 106.92071352502663,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3293.422788605697,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.221942,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.88318093455252,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1134.6075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2653135,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.819781691746467,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 886.85175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.176665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.727152116229504,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1385.263,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.669199,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 30.754750358373744,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 907.1186666666666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.283018,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 113.01657019634548,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3433.8125937031487,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.709249968062524,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 111.63176795580111,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3316.8275862068967,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.9540775229612386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 3.9853350109987415,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 283.2555941626129,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.8781010609494695,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 73.03070642527511,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6785.172077922078,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.867911,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 66.54239388965193,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6200.943502824859,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.87242875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 68.18900539345415,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 9719.24152542373,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.113705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 43.176298589611285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6998.826923076923,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.412547,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 358.08024036762106,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 37924.236363636366,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.33152,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2644.07875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 286510.75,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.588699558475331,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2665.8025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 349613.5714285714,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "distinct": true,
          "id": "a585c712a369a04595ad12a2797589482db55f4d",
          "message": "chore: readme",
          "timestamp": "2023-12-24T07:59:30+08:00",
          "tree_id": "6900a9325dbcf7c153fe5a21e27b7cca48a821db",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/a585c712a369a04595ad12a2797589482db55f4d"
        },
        "date": 1703376712137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 19.831845637273492,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 206.28028357135517,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2196.12,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.016742591141173158,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.04557970163536239,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.027095621107113495,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.19219926994854197,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.2012515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 9.372559035376707,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.5471964490507768,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.4130162241458149,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.24549010163334137,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.0160235729399116,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 358.0059065688205,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 33.466132324888726,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 46.514326247732455,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 203.0763529292314,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6404795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.8435815782092109,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 143.26442277044686,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.04856945129574296,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.3528385,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 130.11500496853262,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 41.78011739884273,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 68.9132726896837,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 2146.934549356223,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.62032675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 21.239284085727313,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1810.4310344827586,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.8379516243008,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 6.0443991114737745,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 61.91258048538881,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7807076666666667,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 24.69530304696953,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 691.95325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.498272,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 61.270145368393344,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 1987.4245754245753,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.88699575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 22.202892971070288,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 744.359,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.82888175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 14.54711742017806,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 508.89650476622785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.0792415,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 28.53307323541412,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 838.58725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.682728,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.21279287207128,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 695.53725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.437535,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 79.05047491953843,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2793.17,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.419109,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 88.83786911561579,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 3060.88625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7598605,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.225311,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 164.03425734381466,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.272286,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 67.82947394525559,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5860.0467032967035,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.67121925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 57.96975635438299,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8331.134831460675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.61850275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 71.33502378177465,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 11060.354260089685,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2284485,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 34.495791071551785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6816.259701492538,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.78405675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 268.2549912903658,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 30833.08,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.154121,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2297.409,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 235806.77777777778,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.44155,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2221.397,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 300336.5,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.57381535654616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.45218817259405,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2057.618,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.016662022975006966,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.04625886486122341,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.026778938685347472,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17192151066180672,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.0239515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 27.06912093117683,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3744864120164348,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.30131368493431576,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16960033005037287,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014279446985720553,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 189.8374145785877,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 27.938689129159332,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 30.871145000463063,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 168.11893754728084,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4314281341635956,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.575880462059769,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 123.1311324799412,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.06495937650593434,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.24214,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 132.71198521647307,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 28.144364859350155,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 46.56612339930151,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1708.1912894961572,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49420375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 19.809165547708613,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1897.892803598201,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.0101675019823464,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.865752396127222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 67.26517571884985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58623925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 16.335784,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 560.72875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.0026025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 45.361390482618965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1786.7196401799101,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.60300175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 18.02159834341201,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 600.451,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.55364675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.033395933208133,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 437.26973415132926,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.90701975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.513874673689294,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 808.24775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.50405975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 28.715858273133815,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 705.298,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.935929,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 73.29113226268788,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2423.588,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.266291,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.14190893402363,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2857.97375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.51795775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.675513412243294,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 125.59575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9091855,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 73.20067228252066,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6325.820448877806,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4844430261778966,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 54.204519682488254,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5962.370879120879,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.47428172292922005,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 60.31727365452691,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 8839.576779026218,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.91270175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.521088,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5367.852,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58905725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 289.1131965662738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 29877.222222222223,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.971783514108243,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2094.189,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 234201.7,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.0676025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2248.165,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 266624.1111111111,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 47.4745065215875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1047.52125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10114.834123222749,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.022082624972396717,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.05575746355394029,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.026526278973473722,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.2399061741085616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.3536755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 40.34470377019748,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.9946445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.6050475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.3244210722566288,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.02375331824406167,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 655.5571943625041,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.53746625129803,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 49.22154406516871,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 261.17354400626795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1635465,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.6375875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 184.23514259429624,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07506835933644043,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.418865,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 181.3001809954751,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 42.601337678658915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.5276521034506,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1843.8562211981566,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1961585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 24.261657906736747,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2256.738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.3240506809421575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 11.872407365634164,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 96.66106036440965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6324506837746582,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 49.093490457407455,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1530.5104947526238,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.426001,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 104.54110550673391,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3300.3478260869565,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2229875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.84432522430858,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1131.9005,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.275116,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.7027677833933,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 885.54675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.191915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.446088465646135,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1390.375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.828733,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 31.22342948370197,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 903.69025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.19433,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 113.97732281637862,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3479.592203898051,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.772437170672122,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 110.29872023327394,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3352.0119940029986,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.00372,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 4.033276225042831,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 285.5195296094078,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.783401608299196,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 74.9853001837477,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 7295.707792207792,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.88164175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.48672015719666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 8723.559322033898,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.900018,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.75007818744136,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10345.627906976744,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.202073,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 43.61822393166025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6884.744505494506,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.5916295,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 355.71763061331467,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 38108.90909090909,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.175094,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2666.3775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 279479.375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.611754041184469,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2618.79625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 320411.14285714284,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "distinct": true,
          "id": "159a2e045ded25993ae302da03ee06d599713813",
          "message": "feat: doc",
          "timestamp": "2023-12-24T09:03:25+08:00",
          "tree_id": "5bea752875f52cddd5c9b7224192d6d68951a99b",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/159a2e045ded25993ae302da03ee06d599713813"
        },
        "date": 1703388002548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 18.5908203757319,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 221.58029384567965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2059.536,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.017976944,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.04226014966650979,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.026709404151408905,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.1931773539605286,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.209506,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 8.521770994448067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.5489420896084632,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.4011097998261983,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.2675342423868497,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.014619363945177386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 362.9208998548621,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 43.15615829449335,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 37.671934450932376,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 219.62929614582188,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.5955755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.0509707245146376,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 128.07969005921632,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.05386761556905908,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.268886,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 145.34387460470234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 33.70190752224319,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 77.46264378945737,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1984.2301587301588,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.67877,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 19.93089260468971,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1934.7181409295351,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4833152258264786,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 7.323619772308661,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 63.965490773019475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8530445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 24.23583599769701,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 761.13875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.377984,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 67.7849375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2022.7886056971515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.86816625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.31312347985477,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 716.90325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.83100725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 16.282712,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 496.67775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.0997715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 29.10998781004876,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 890.874,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.757743,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.080552194478056,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 707.49475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.3003346690393136,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 78.43245152680744,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2560.9625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.458605555192593,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 97.68000178994943,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2854.525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8172115,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.64514125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 176.74092558983665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.186285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 68.18577761244924,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5842.5329670329675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.68508275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 57.738607940660664,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8428.513108614232,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.65470675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 72.97917913503638,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 11153.59192825112,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1566725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 34.584454564272406,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5994.025423728814,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7132906666666666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 297.9059748001626,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 28239.56,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.353642,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2100.933,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 260543.22222222222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.264236,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2408.293,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 275762.625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.552259611935096,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 206.1109627042022,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2053.385,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.017293343474059985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.04692752085921744,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.03463389565366105,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17095616223619603,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.024776,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 26.543271974412402,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.36719711002998145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3060598629454735,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16965669656611315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.01428041998571958,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 181.40050789044076,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 28.55691358729796,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.423859473614524,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 166.62045984671775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.45947749070664207,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.5706807146596427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 121.34285195716619,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.05330723888696675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.285435,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 132.05634463352538,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.42874887679053,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 44.30706690296854,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1744.4742807323453,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.55047375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 23.23495212038304,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1902.1446776611695,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.055679067544441,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.8390272361941724,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 64.08003588478421,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.64318425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.473939208486332,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 592.76025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.0146465,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 46.66013477770878,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1740.047976011994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.62475925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 19.404991956320384,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 610.4745,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.61314825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.80232439535121,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 444.0707646810308,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.90058925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.61195906329679,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 800.697,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.534624,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 22.281421998624012,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 713.8725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.949067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 76.46895424836602,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2422.067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.299487,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.22018673392628,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2858.6925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58699525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.803376348311826,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 124.40838482416123,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.984463,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 73.24268677275528,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6125.821428571428,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5399005,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 54.33059597688851,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5102.13,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.52830925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 61.44355375400811,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 7960.5329341317365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.92451975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.85025756024635,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4726.91011235955,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.57386375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 285.12717164697705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 30518.159420289856,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.012135743932128,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2088.413,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 215554.11111111112,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.139062,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2229.969,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 280777.22222222225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 46.62750857733703,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1036.504,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10381.46,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.022342165705315668,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.06077142462572865,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.026548600688053942,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.252011749629295,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.411105,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 49.12635095303596,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 1.01030625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.603601,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.35963775988745345,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.023959919808320643,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 675.1535605804927,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.450880829015546,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 45.87403091884949,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 264.7728355837967,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.142157,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.65659875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 184.55797435660918,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07499315158760615,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.425452,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 182.00664240218381,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 40.0383760735091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 65.86372917078312,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1788.9142091152814,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.161856,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 24.83635770455287,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2186.827,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.721240737317897,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 10.472277346961215,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 98.91661721068249,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6068306965846517,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 49.15606242496999,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1511.5855,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.420114,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 106.35068928406703,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3292.839580209895,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2060395,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.89353883076461,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1122.4645,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2987665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.941276219790243,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 885.50225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.084515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.41957022924007,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1392.2285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.773986,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 31.090066184768354,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 907.23075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.084012,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 112.17198895027624,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3535.8846153846152,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.7641106769169923,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 113.30253878702398,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3336.146926536732,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.8771950614024693,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 3.9785815428369142,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 283.771692745377,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.81612125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 74.1437828497372,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 7004.86038961039,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.86200025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 66.01402863777089,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6506.095808383234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.879994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.6530327757378,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 9438.348,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.160004,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 42.40064813606507,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6701.706043956044,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.330431,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 359.07543179414876,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 36640.38596491228,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.094282,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2624.2275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 284084.625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.473134895148829,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2560.885,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 318319.14285714284,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5236035+fzyzcjy@users.noreply.github.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a8c44c0a8351d1d34f83e50aa5886f1ca07e780",
          "message": "Merge pull request #1485 from fzyzcjy/feat/11611\n\nFix performance bug (for the benchmark case of transferring 1MB data from Rust to Dart)",
          "timestamp": "2023-12-24T11:45:59+08:00",
          "tree_id": "1cc0366f78c3aa186ffdfdcbd5773d09c3feaed4",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/5a8c44c0a8351d1d34f83e50aa5886f1ca07e780"
        },
        "date": 1703390307939,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 20.14256033610353,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 205.86061289330738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2234.057,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.017081954888967292,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.051180174448819823,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.024019247807846016,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.19113414308865856,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.05073925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 11.17124967184454,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.51887425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.3880604369961611,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.2838916557950467,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.014532095695504642,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 398.8530408773679,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 33.15406547865727,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 38.62773045947042,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 210.49389602189012,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.61457125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.8517658333333333,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 143.08127500158741,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.046993992409293556,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.363614,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 129.04737403526386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 38.350092038656236,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 45.50419766568835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 264.86875910475436,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.62989225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.8069448465275768,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 483.0638333333333,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.3503431499283147,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 4.979784574627014,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 45.45502272727273,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.90237925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 24.2527375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 785.08,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.419041,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 69.07618939048487,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2003.6416791604197,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.92683725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.133931082586148,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 700.63525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.81927925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 14.713190720855675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 474.60136157337365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1064818753147976,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 29.11862357651708,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 804.3235,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.225233,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 20.26841,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 694.109,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.192797,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 87.59042120354943,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2540.1975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.690401,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 88.90650028762335,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 3064.4725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.846682,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.2291836419076287,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 183.2660478834143,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2633825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 4.120345659740755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1288.1685,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7080085,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 56.97372807141445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8267.059925093634,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.62387575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 71.874624,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 9091.67372881356,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.210943,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 32.51109052795788,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5213.926,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.77344825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 220.19380443170544,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 27615.036585365855,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.164703,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2391.136,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 223813.4,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.486388,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2230.811,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 264190.71428571426,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 18.758993238305784,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.33791124321002,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2056.179,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.01668875989152306,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.043212051274667436,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.026684626166442172,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17565107471487357,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.0714145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 26.19758196560261,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.35296649435081445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3087743055736771,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.1712064210019438,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014461397985538601,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 179.27671208318392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.642249130799666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.309519622497728,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 155.3998912283428,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4184898598129672,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.6594394202802898,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 128.18582265570217,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.052687228762378795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.188546,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 120.63531750813351,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.746670054562962,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.721423051774355,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 78.03433342436892,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49512775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.8103153448423275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 439.37571192357154,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.1291454461837196,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.351074147000911,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 51.17206529526149,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.62340575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 16.897964739755636,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 564.66225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.099062,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 52.270734751182985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1721.3973013493253,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.6166225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.828736678158304,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 587.44175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.55084675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 12.80810625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 428.9816200042744,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9130055,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.031454960681298,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 793.97675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.86249225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 19.906781065665676,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 624.90725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9649742675128663,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 74.56019518736497,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2432.329,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.223963,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 90.14498590414821,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2870.90625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4921010379739377,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 4.9428140714824105,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 123.36283131418732,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.89337175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 4.116628,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1317.35932033983,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4937448173386091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 52.650514489710204,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5720.684065934066,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4800242079585354,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 54.20273378985662,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6786.838323353293,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.899802,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.47418710086287,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 3899.554195804196,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.54235475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 212.00655599027175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 22593.340659340658,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9567925216037392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2114.032,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 212498,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9953125023437488,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2180.741,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 233598.33333333334,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 46.4432484647761,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1040.50325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10255.836653386454,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.022582482977417516,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.05894996640835091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.02660459097339541,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.23496263007846416,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.278844,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 38.79919686505781,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.985426,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.52888475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.35522050760335444,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.023951693928144918,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 654.57722513089,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 40.68481864968775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 46.95614302819712,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 257.7922412682047,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.131128,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.62137,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 183.95344986200553,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07559633578880717,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.4291315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 181.28823529411764,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.22230924605301,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 47.675947556615014,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 129.044325440351,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1516675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.8083925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 616.32,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.864232614649616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 7.892912956999432,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 81.85405582385201,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6940451529774234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 52.81199625604493,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1628.4715142428786,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.61467,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 107.52963834795635,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3694.124125874126,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.279803,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.72065488853945,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1118.7085,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.3087015,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 29.878726197324365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 916.446,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.278233,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.7186113702027,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1395.7255,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.0290617354691323,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.051726982730173,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 887.42,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.04004871996346,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 104.32120014559825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3342.634182908546,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.809589642807768,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 104.91472287609673,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3202.457271364318,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6584914207542896,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 3.7272347045739718,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 283.0535207056361,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.309557,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 6.62361834685872,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1984.4842578710645,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.81552075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 61.82925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6168.200598802395,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.829879,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 65.518208,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10563.413793103447,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.057787,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 41.668354482277934,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 5621.71072319202,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.452959,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 287.78140667526145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 31766.530303030304,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.9250230562327078,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2584.02,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 270927.625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.3170278414860794,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2605.19125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 298411,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5236035+fzyzcjy@users.noreply.github.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a8c44c0a8351d1d34f83e50aa5886f1ca07e780",
          "message": "Merge pull request #1485 from fzyzcjy/feat/11611\n\nFix performance bug (for the benchmark case of transferring 1MB data from Rust to Dart)",
          "timestamp": "2023-12-24T11:45:59+08:00",
          "tree_id": "1cc0366f78c3aa186ffdfdcbd5773d09c3feaed4",
          "url": "https://github.com/trobanga/flutter_rust_bridge/commit/5a8c44c0a8351d1d34f83e50aa5886f1ca07e780"
        },
        "date": 1703417352313,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 20.921135150635006,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 205.5849133955109,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2231.482,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.017224143638043067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.05162237284513288,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.023383145429850562,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.18861869545525217,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.05613125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 10.113711985598268,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.5615907829364485,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.39889268814329104,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.24700815075299185,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.015948512984051488,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 368.5408144462871,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 33.48422903063787,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 48.608029942157195,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 204.50889570552147,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.62351725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.8419315790342106,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 452.4203043152906,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.0475985914288169,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.368854,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 475.0289203084833,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 33.5231055463368,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 47.997384146487796,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 115.88776870038821,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.60635925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.8461893269053364,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 462.8575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.6363465001199535,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 4.2449416214403515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 72.37602229138018,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8007875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 27.463790289677682,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 722.03825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.459442,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 70.09942965199622,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 1984.464767616192,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.933881,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.15026966054496,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 703.82325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.83029325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 15.143744,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 466.59697439875873,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2371145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.547684618523054,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 881.021,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2107025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 20.26607,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 709.98725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.16747,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 87.41974104984011,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2548.02875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.670421,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 89.24230153079388,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 3118.54875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.74973775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.362754,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 153.71161439320568,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.3487245,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 3.751921936058548,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1897.628,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.62728925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 58.26189749424203,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8014.029962546817,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.69578425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 63.84579135521612,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 10540.726457399103,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.0900305,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 37.840085149254946,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 4882.011235955056,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7695215,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 224.10908084163898,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 28707.815789473683,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.161426,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2320.794,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 213337.3,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.341946285444715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2340.573426573427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 276581.1111111111,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 18.654200852842965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.58317105667726,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2053.102,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.01630708189400397,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.043004342913991314,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.02671272843612544,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17567298679062793,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.066611,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 27.00821044671312,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3790471111366809,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.300278730881325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.17171502817182113,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.01388700519792373,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 182.99990850869168,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 28.19897074374339,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 30.3814674160717,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 158.19583959503282,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.45325364589621564,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.6538106730946636,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 131.9207100591716,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.05242360614712853,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.1583145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 121.4154986106823,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 28.098850768495883,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 30.118379640087344,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 80.35798947326128,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.53171275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.8569668215165893,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 443.89606018610175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.095547487701762,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.3639667815553946,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 53.63715841132774,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.65805675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.118038555691555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 576.43575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.1555835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 53.35355417891642,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1802.7443778110944,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.6072365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.5719423201442,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 590.57675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5778795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 12.977289124909813,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 433.2496876301541,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.894705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.787642167968077,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 796.04675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.8656665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 19.889250719056207,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 631.079,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.948144275927862,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 74.79825672353424,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2423.072,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.217912,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.72909115317492,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2861.5975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5185056672708478,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.7065401467299266,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 134.03277266052598,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.0090325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 4.239786,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1302.2048975512243,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4884196195269073,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 54.62883535887514,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5344.345,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49910866146525823,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 55.73825761742383,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6353.34131736527,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.90066425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.43088,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 3851.036713286713,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.621067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 211.5315961599325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 22871.20879120879,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9342445328777336,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2135.146,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 212754.6,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9846265076867462,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2164.773,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 234617.66666666666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 46.289328207111495,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1028.4955,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10009.65,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.022333866705332266,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.05885181635263002,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.0259506908336328,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.23604128648981182,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.275016,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 39.75335413726621,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 1.068616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.6060355,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.3496416114689946,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.02348504224412874,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 662.4655629139073,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.62805702986783,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 47.89284260434376,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 263.0653689333158,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2157295,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.71903,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 186.95167872379892,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07514291156071361,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.4418367790816105,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 181.26669683257919,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.80801872988001,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 49.61309287557055,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 122.88804915514594,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.340073,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.992,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 628.4545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.263515079389935,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 7.304605551497444,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 80.89767027988998,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.9221027889486055,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 52.78576257084915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1609.0089955022488,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.72343875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 107.81045367001926,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3778.5314685314684,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.3747485,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 37.28187956710757,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1118.3175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.4461645,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 30.401912343306797,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 939.766,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.376564,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.56845231547685,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1366.679,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.147475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.356355689198196,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 885.4265,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.17998,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 104.69342541436464,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3401.0899550224885,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.071041357917284,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 105.71780405771943,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3236.785607196402,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.7499576250211875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 4.015833988124509,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 285.52883242934627,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.484199,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 7.003966646172328,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2019.996,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.91786825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 60.92638602748993,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6164.041208791209,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.90285425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 65.92556777018301,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10524.755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.106193,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 41.0486377689706,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 5726.9675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.5412315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 285.2851841278904,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 32062.8,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.020569484572887,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2598.01875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 266551.625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.51905374047313,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2629.02125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 303826.5714285714,
            "unit": "Microseconds"
          }
        ]
      }
    ]
  }
}