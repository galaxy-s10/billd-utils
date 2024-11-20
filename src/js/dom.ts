// TIP: ctrl+cmd+t,生成函数注释

/**
 * @description 计算两个dom是否有交集
 * @param {Element} element1
 * @param {Element} element2
 * @return {*}
 */
export function elementsIsIntersect(element1: Element, element2: Element) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return (
    rect1.left <= rect2.right &&
    rect1.right >= rect2.left &&
    rect1.top <= rect2.bottom &&
    rect1.bottom >= rect2.top
  );
}

/**
 * @description 获取dom元素的样式值,注意:如果获取的样式值没有显示的声明,
 * 会获取到它的默认值,比如position没有设置值,获取它的position就会返回static
 * @param {Element} ele
 * @param {*} styleName
 * @return {*}
 */
export const getStyle = (ele: Element, styleName: string) => {
  if (window.getComputedStyle) {
    return window.getComputedStyle(ele, null)[styleName];
  } else {
    // 兼容ie
    // @ts-ignore
    return ele.currentStyle[styleName];
  }
};

/**
 * @description 将内容复制到剪切板
 * @param {string} text
 * @return {*}
 */
export const copyToClipBoard = (text: string) => {
  if (navigator.clipboard) {
    // eslint-disable-next-line
    navigator.clipboard.writeText(text).catch();
  } else {
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    // 赋值
    textarea.value = text;
    // 选中
    textarea.select();
    // https://github.com/tusen-ai/naive-ui/issues/6239
    // https://stackoverflow.com/questions/48122221/working-copy-to-clipboard-function-doesnt-work-when-called-in-bootstrap-modal
    // 重点：模拟 Focus
    textarea.focus();
    // 复制
    document.execCommand('copy', true);
    // 移除输入框
    document.body.removeChild(textarea);
  }
};

/**
 * @description 获取滚动条宽度
 * @copy https://github.com/iview/iview/blob/2.0/src/utils/assist.js#L19
 * @return {*}
 */
export const getScrollBarSize = () => {
  const inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  const outer = document.createElement('div');
  const outerStyle = outer.style;

  outerStyle.position = 'absolute';
  outerStyle.top = '0px';
  outerStyle.left = '0px';
  outerStyle.pointerEvents = 'none';
  outerStyle.visibility = 'hidden';
  outerStyle.width = '200px';
  outerStyle.height = '150px';
  outerStyle.overflow = 'hidden';

  outer.appendChild(inner);

  document.body.appendChild(outer);

  const widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  let widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  return widthContained - widthScroll;
};
