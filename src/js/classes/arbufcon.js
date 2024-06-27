export default class ArrayBufferConverter {
  bufferView;

  static load(buf) {
    this.bufferView = new Uint16Array(buf);
  }

  static toString() {
    let str = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      str += (String.fromCharCode(this.bufferView[i]));
    }
    return str;
  }
}
