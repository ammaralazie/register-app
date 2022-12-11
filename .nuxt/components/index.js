export const Loading = () => import('../..\\components\\loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const SideBarList = () => import('../..\\components\\SideBarList.vue' /* webpackChunkName: "components/side-bar-list" */).then(c => wrapFunctional(c.default || c))
export const SideBarLogo = () => import('../..\\components\\SideBarLogo.vue' /* webpackChunkName: "components/side-bar-logo" */).then(c => wrapFunctional(c.default || c))
export const ReportsOrders = () => import('../..\\components\\Reports\\Orders.vue' /* webpackChunkName: "components/reports-orders" */).then(c => wrapFunctional(c.default || c))
export const ReportsStudents = () => import('../..\\components\\Reports\\Students.vue' /* webpackChunkName: "components/reports-students" */).then(c => wrapFunctional(c.default || c))
export const ProfileTabsFive = () => import('../..\\components\\ProfileTabs\\Five.vue' /* webpackChunkName: "components/profile-tabs-five" */).then(c => wrapFunctional(c.default || c))
export const ProfileTabsFour = () => import('../..\\components\\ProfileTabs\\Four.vue' /* webpackChunkName: "components/profile-tabs-four" */).then(c => wrapFunctional(c.default || c))
export const ProfileTabsOne = () => import('../..\\components\\ProfileTabs\\One.vue' /* webpackChunkName: "components/profile-tabs-one" */).then(c => wrapFunctional(c.default || c))
export const ProfileTabsSaven = () => import('../..\\components\\ProfileTabs\\Saven.vue' /* webpackChunkName: "components/profile-tabs-saven" */).then(c => wrapFunctional(c.default || c))
export const ProfileTabsSix = () => import('../..\\components\\ProfileTabs\\Six.vue' /* webpackChunkName: "components/profile-tabs-six" */).then(c => wrapFunctional(c.default || c))
export const ProfileTabsThree = () => import('../..\\components\\ProfileTabs\\Three.vue' /* webpackChunkName: "components/profile-tabs-three" */).then(c => wrapFunctional(c.default || c))
export const ProfileTabsTwo = () => import('../..\\components\\ProfileTabs\\Two.vue' /* webpackChunkName: "components/profile-tabs-two" */).then(c => wrapFunctional(c.default || c))
export const StepperAddressStudentInfo = () => import('../..\\components\\Stepper\\AddressStudentInfo.vue' /* webpackChunkName: "components/stepper-address-student-info" */).then(c => wrapFunctional(c.default || c))
export const StepperBasicStudentInfo = () => import('../..\\components\\Stepper\\BasicStudentInfo.vue' /* webpackChunkName: "components/stepper-basic-student-info" */).then(c => wrapFunctional(c.default || c))
export const StepperResponsibleStudentInfo = () => import('../..\\components\\Stepper\\ResponsibleStudentInfo.vue' /* webpackChunkName: "components/stepper-responsible-student-info" */).then(c => wrapFunctional(c.default || c))
export const StepperSchollStudentInfo = () => import('../..\\components\\Stepper\\SchollStudentInfo.vue' /* webpackChunkName: "components/stepper-scholl-student-info" */).then(c => wrapFunctional(c.default || c))
export const StepperUploadAttachments = () => import('../..\\components\\Stepper\\UploadAttachments.vue' /* webpackChunkName: "components/stepper-upload-attachments" */).then(c => wrapFunctional(c.default || c))
export const ProfileTabsDialogsCreate = () => import('../..\\components\\ProfileTabs\\Dialogs\\Create.vue' /* webpackChunkName: "components/profile-tabs-dialogs-create" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
