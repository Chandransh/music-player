/*
 * Helpers function
 */

export default class Helpers {
  static scriptLoaded = {nextId: 0, data: []};

  static objSearch (object, item, obj) {
    if (obj) {
      for (var i = 0; i < object.length; i++) {
        if (object[i][obj] === item) {
          return i;
        }
      }
      return -1;
    } else {
      for (var j = 0; j < object.length; j++) {
        if (object[j] === item) {
          return j;
        }
      }
      return -1;
    }
  }

  static loadScript (src, force) {
    let _self = this;
    return new Promise(function (resolve, reject) {
      let s;
      if (_self.objSearch(_self.scriptLoaded.data, src, 'src') >= 0) {
        if (force === true) {
          let id = _self.objSearch(_self.scriptLoaded.data);
          let oldElement = document.getElementById('dynscript-' + id);
          s = document.createElement('script');
          s.src = src;
          s.id = 'dynscript-' + id;
          s.onload = resolve;
          s.onerror = reject;
          document.head.replaceChild(s, oldElement);
        } else {
          resolve();
        }
      } else {
        let id = _self.scriptLoaded.nextId++;
        _self.scriptLoaded.data.push({id: id, src: src});
        s = document.createElement('script');
        s.src = src;
        s.id = 'dynscript-' + id;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      }
    });
  }
}
