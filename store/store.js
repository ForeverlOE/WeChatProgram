import {
  observable,
  action
} from 'mobx-miniprogram'
export const store = observable({
  activeIndex: 0,
  goodList: observable.array([]),
  updateactiveIndex: action(function (active) {
    this.activeIndex = active
  }),
  updateGoodList: action(function (goods) {
    this.goodList.replace(goods)
  })
})