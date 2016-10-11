# lec45 pub sub note


## NOTE

  - client get data via pub/sub system built in meteor
      - server pub with _limited_ amount of data
          - efficiency concern
              - suitable for _lazy load_
          - secure data kept in server
              - by default, data in server is not secured
      - client can sub
          - react use _container_ to access subscription
              - watch if subscription changes
                  - container pass all loaded data to view
