import Vue from 'vue'
import Vuetify, {
  VApp,
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelHeader,
  VExpansionPanelContent,
  VCard,
  VList,
  VListGroup,
  VListItem,
  VListItemContent,
  VListItemTitle,
  VSpacer
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VApp,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VCard,
    VList,
    VListGroup,
    VListItem,
    VListItemContent,
    VListItemTitle,
    VSpacer
  }
})

export default new Vuetify({})
