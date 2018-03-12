
//我的任务
const MyTask = resolve => require.ensure([], () => resolve(require('../components/myTask/MyTask.vue')), 'myTask')

//收货质检
const ReceivingList = resolve => require.ensure([], () => resolve(require('../components/receivingInspection/ReceivingList.vue')), 'receivingList')
const ReceivingDetail = resolve => require.ensure([], () => resolve(require('../components/receivingInspection/ReceivingDetail.vue')), 'receivingList')
const ReceivingNoteAdd = resolve => require.ensure([], () => resolve(require('../components/receivingInspection/receivingNoteAdd/ReceivingNoteAdd.vue')), 'receivingList')
const ReceivingNoteInfo = resolve => require.ensure([], () => resolve(require('../components/receivingInspection/receivingNoteInfo/ReceivingNoteInfo.vue')), 'receivingList')
const Receiving = resolve => require.ensure([], () => resolve(require('../components/receivingInspection/receiving/Receiving.vue')), 'receivingList')
const ReceivingNoteEdit = resolve => require.ensure([], () => resolve(require('../components/receivingInspection/receivingNoteEdit/ReceivingNoteEdit.vue')), 'receivingList')
const ReceivingNoteDel = resolve => require.ensure([], () => resolve(require('../components/receivingInspection/receivingNoteDel/ReceivingNoteDel.vue')), 'receivingList')
const ReceivingNotePrint = resolve => require.ensure([], () => resolve(require('../components/receivingInspection/receivingNotePrint/ReceivingNotePrint.vue')), 'receivingList')
const PrintTag = resolve => require.ensure([], () => resolve(require('../components/receivingInspection/printTag/PrintTag.vue')), 'receivingList')

//入库管理
const PutInStorageList = resolve => require.ensure([], () => resolve(require('../components/putInStorageManage/PutInStorageList.vue')), 'putInStorageList')
const PutInStorageDetail = resolve => require.ensure([], () => resolve(require('../components/putInStorageManage/PutInStorageDetail.vue')), 'putInStorageList')
const GodownEntryAdd = resolve => require.ensure([], () => resolve(require('../components/putInStorageManage/godownEntryAdd/GodownEntryAdd.vue')), 'putInStorageList')
const GodownEntryInfo = resolve => require.ensure([], () => resolve(require('../components/putInStorageManage/godownEntryInfo/GodownEntryInfo.vue')), 'putInStorageList')
const ToExamine = resolve => require.ensure([], () => resolve(require('../components/putInStorageManage/toExamine/ToExamine.vue')), 'putInStorageList')
const Putaway = resolve => require.ensure([], () => resolve(require('../components/putInStorageManage/putaway/Putaway.vue')), 'putInStorageList')
const GodownEntryPrint = resolve => require.ensure([], () => resolve(require('../components/putInStorageManage/print/GodownEntryPrint.vue')), 'putInStorageList')
const GodownEntryTag= resolve => require.ensure([], () => resolve(require('../components/putInStorageManage/printTag/PrintTag.vue')), 'putInStorageList')
const GodownEntryCopy = resolve => require.ensure([], () => resolve(require('../components/putInStorageManage/copy/GodownEntryCopy.vue')), 'putInStorageList')
const GodownEntryEdit = resolve => require.ensure([], () => resolve(require('../components/putInStorageManage/godownEntyrEdit/GodownEntryEdit.vue')), 'putInStorageList')
const GodownEntryDel = resolve => require.ensure([], () => resolve(require('../components/putInStorageManage/godownEntryDel/GodownEntryDel.vue')), 'putInStorageList')
const GodownEntryCancellation = resolve => require.ensure([], () => resolve(require('../components/putInStorageManage/godownEntryCancellation/cancellation.vue')), 'putInStorageList')

//库存管理
const InventoryList = resolve => require.ensure([], () => resolve(require('../components/InventoryManagement/InventoryList.vue')), 'inventoryList')
const InventoryDetail = resolve => require.ensure([], () => resolve(require('../components/InventoryManagement/InventoryDetail.vue')), 'inventoryList')
const InventoryInfo = resolve => require.ensure([], () => resolve(require('../components/InventoryManagement/InventoryInfo.vue')), 'inventoryList')
const InventoryDeblockingInfo = resolve => require.ensure([], () => resolve(require('../components/InventoryManagement/DeblockingInfo.vue')), 'inventoryList')

//出库管理
const PutOutStorageList = resolve => require.ensure([], () => resolve(require('../components/putOutStorageManage/PutOutStorageList.vue')), 'putOutStorageList')
const PutOutStorageDetail = resolve => require.ensure([], () => resolve(require('../components/putOutStorageManage/PutOutStorageDetail.vue')), 'putOutStorageList')
const OutBoundOrderAdd = resolve => require.ensure([], () => resolve(require('../components/putOutStorageManage/outboundOrderAdd/OutBoundOrderAdd.vue')), 'putOutStorageList')
const OutBoundOrderInfo= resolve => require.ensure([], () => resolve(require('../components/putOutStorageManage/outBoundOrderInfo/OutBoundOrderInfo.vue')), 'putOutStorageList')
const OutBoundOrderToExamine= resolve => require.ensure([], () => resolve(require('../components/putOutStorageManage/toExamine/ToExamine.vue')), 'putOutStorageList')
const OutBoundOrderSoldOut= resolve => require.ensure([], () => resolve(require('../components/putOutStorageManage/soldOut/SoldOut.vue')), 'putOutStorageList')
const OutBoundOrderPrint = resolve => require.ensure([], () => resolve(require('../components/putOutStorageManage/print/OutBoundOrderPrint.vue')), 'putOutStorageList')
const OutBoundOrderCopy = resolve => require.ensure([], () => resolve(require('../components/putOutStorageManage/copy/OutBoundOrderCopy.vue')), 'putOutStorageList')
const OutBoundOrderDel = resolve => require.ensure([], () => resolve(require('../components/putOutStorageManage/del/OutBoundOrderDel.vue')), 'putOutStorageList')
const OutBoundOrderEdit = resolve => require.ensure([], () => resolve(require('../components/putOutStorageManage/edit/OutBoundOrderEdit.vue')), 'putOutStorageList')
const OutBoundOrderCancellation = resolve => require.ensure([], () => resolve(require('../components/putOutStorageManage/cancellation/Cancellation.vue')), 'putOutStorageList')
const OutBoundOrderConfirm = resolve => require.ensure([], () => resolve(require('../components/putOutStorageManage/confirm/Confirm.vue')), 'putOutStorageList')

//调拨业务
const AllocationList = resolve => require.ensure([], () => resolve(require('../components/allocation/AllocationList.vue')), 'allocation')
const AllocationDetail = resolve => require.ensure([], () => resolve(require('../components/allocation/AllocationDetail.vue')), 'allocation')
const AllocationAdd = resolve => require.ensure([], () => resolve(require('../components/allocation/allocationAdd/AllocationAdd.vue')), 'allocation')
const AllocationInfo = resolve => require.ensure([], () => resolve(require('../components/allocation/allocationInfo/AllocationInfo.vue')), 'allocation')
const AllocationToExamine = resolve => require.ensure([], () => resolve(require('../components/allocation/toExamine/ToExamine.vue')), 'allocation')
const AllocationToPrint = resolve => require.ensure([], () => resolve(require('../components/allocation/print/AllocationPrint.vue')), 'allocation')
const AllocationCancellation = resolve => require.ensure([], () => resolve(require('../components/allocation/cancellation/cancellation.vue')), 'allocation')

//盘点业务
const StockTackingList = resolve => require.ensure([], () => resolve(require('../components/stockTacking/StockTackingList.vue')), 'stockTacking')
const StockTackingDetail = resolve => require.ensure([], () => resolve(require('../components/stockTacking/StockTackingDetail.vue')), 'stockTacking')
const StockTackingAdd = resolve => require.ensure([], () => resolve(require('../components/stockTacking/stockTackingAdd/StockTackingAdd.vue')), 'stockTacking')
const StockTackingInfo = resolve => require.ensure([], () => resolve(require('../components/stockTacking/stockTackingInfo/StockTackingInfo.vue')), 'stockTacking')
const StockTackingVerify = resolve => require.ensure([], () => resolve(require('../components/stockTacking/verify/Verify.vue')), 'stockTacking')
const StockTackingToExamine = resolve => require.ensure([], () => resolve(require('../components/stockTacking/toExamine/ToExamine.vue')), 'stockTacking')
const StockTackingInventoryProfit = resolve => require.ensure([], () => resolve(require('../components/stockTacking/inventoryProfit/InventoryProfit.vue')), 'stockTacking')
const StockTackingInventoryLosses = resolve => require.ensure([], () => resolve(require('../components/stockTacking/inventoryLosses/InventoryLosses.vue')), 'stockTacking')

//报损业务
const ReportedLossList = resolve => require.ensure([], () => resolve(require('../components/reportedLoss/ReportedLossList.vue')), 'reportedLoss')
const ReportedLossDetail = resolve => require.ensure([], () => resolve(require('../components/reportedLoss/ReportedLossDetail.vue')), 'reportedLoss')
const ReportedLossInfo = resolve => require.ensure([], () => resolve(require('../components/reportedLoss/reportedLossInfo/ReportedLossInfo.vue')), 'reportedLoss')
const ReportedLossAdd = resolve => require.ensure([], () => resolve(require('../components/reportedLoss/reportedLossAdd/ReportedLossAdd.vue')), 'reportedLoss')
const ReportedLossToExamine = resolve => require.ensure([], () => resolve(require('../components/reportedLoss/toExamine/ToExamine.vue')), 'reportedLoss')

//预警管理
const WarningManageList = resolve => require.ensure([], () => resolve(require('../components/warningManage/WarningManageList.vue')), 'reportedLoss')

//数据管理
const DMContainer = resolve => require.ensure([], () => resolve(require('../components/dataManagement/DMContainer.vue')), 'dataManagement')
const Store = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/StoreManagement.vue')), 'dataManagement')
const Supplier = resolve => require.ensure([], () => resolve(require('../components/dataManagement/supplier/SupplierManagement.vue')), 'dataManagement')
const Config = resolve => require.ensure([], () => resolve(require('../components/dataManagement/config/ConfigManagement.vue')), 'dataManagement')
const Field = resolve => require.ensure([], () => resolve(require('../components/dataManagement/field/FieldManagement.vue')), 'dataManagement')
const StoreDetails = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/StoreDetails.vue')), 'dataManagement')
const StoreDetail = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/store/StoreDetail.vue')), 'dataManagement')
const StoreInfo = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/store/StoreInfo.vue')), 'dataManagement')
const StoreEdit = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/store/StoreEdit.vue')), 'dataManagement')
const AreaDetail = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/area/AreaDetail.vue')), 'dataManagement')
const AreaInfo = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/area/AreaInfo.vue')), 'dataManagement')
const AreaEdit = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/area/AreaEdit.vue')), 'dataManagement')
const ConDetail = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/container/ConDetail.vue')), 'dataManagement')
const ConInfo = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/container/ConInfo.vue')), 'dataManagement')
const ConEdit = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/container/ConEdit.vue')), 'dataManagement')
const LocDetail = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/location/LocDetail.vue')), 'dataManagement')
const LocInfo = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/location/LocInfo.vue')), 'dataManagement')
const LocEdit = resolve => require.ensure([], () => resolve(require('../components/dataManagement/store/location/LocEdit.vue')), 'dataManagement')

const SupplierDetail = resolve => require.ensure([], () => resolve(require('../components/dataManagement/supplier/SupplierDetail.vue')), 'dataManagement')
const SupplierInfo = resolve => require.ensure([], () => resolve(require('../components/dataManagement/supplier/SupplierInfo.vue')), 'dataManagement')
const SupplierEdit = resolve => require.ensure([], () => resolve(require('../components/dataManagement/supplier/SupplierEdit.vue')), 'dataManagement')

const ConfigDetail = resolve => require.ensure([], () => resolve(require('../components/dataManagement/config/ConfigDetail.vue')), 'dataManagement')
const ConfigList = resolve => require.ensure([], () => resolve(require('../components/dataManagement/config/ConfigList.vue')), 'dataManagement')
const ConfigEdit = resolve => require.ensure([], () => resolve(require('../components/dataManagement/config/ConfigEdit.vue')), 'dataManagement')

export default [
  //我的任务
  {path:'/myTask',component:MyTask,name:"myTask"},
  //收货质检
  {path:'/receivingInspection',component:ReceivingList,name:"receivingList",
    children:[
      {'path':'detail/:id',
        component:ReceivingDetail,
        children:[
          {path:'info',component:ReceivingNoteInfo},
          {path:'receiving',component:Receiving},
          {path:'edit',component:ReceivingNoteEdit},
          {path:'del',component:ReceivingNoteDel},
          {path:'print',component:ReceivingNotePrint},
          {path:'tag',component:PrintTag},
        ]},
      {'path':'receivingNoteAdd',
        component:ReceivingNoteAdd
      }
    ]},
  //入库管理
  {path:'/putInStorage',component:PutInStorageList,name:"putInStorage",
    children:[
      {'path':'detail/:id',
        component:PutInStorageDetail,
        children:[
          {path:'info',component:GodownEntryInfo},
          {path:'examine',component:ToExamine},
          {path:'putaway',component:Putaway},
          {path:'print',component:GodownEntryPrint},
          {path:'tag',component:GodownEntryTag},
          {path:'copy',component:GodownEntryCopy},
          {path:'edit',component:GodownEntryEdit},
          {path:'del',component:GodownEntryDel},
          {path:'cancellation',component:GodownEntryCancellation},

        ]},
      {'path':'godownEntryAdd',
        component:GodownEntryAdd
      }
    ]},
  //库存管理
  {path:'/inventory',component:InventoryList,name:"inventory",
    children:[
      {'path':'detail/:id',
        component:InventoryDetail,
        children:[
          {path:'info',component:InventoryInfo},
          {path:'deblockingInfo',component:InventoryDeblockingInfo},
        ]},
    ]},
  //出库管理
  {path:'/putOutStorage',component:PutOutStorageList,name:"putOutStorage",
    children:[
      {'path':'detail/:id',
        component:PutOutStorageDetail,
        children:[
          {path:'info',component:OutBoundOrderInfo},
          {path:'examine',component:OutBoundOrderToExamine},
          {path:'soldOut',component:OutBoundOrderSoldOut},
          {path:'print',component:OutBoundOrderPrint},
          {path:'copy',component:OutBoundOrderCopy},
          {path:'del',component:OutBoundOrderDel},
          {path:'edit',component:OutBoundOrderEdit},
          {path:'cancellation',component:OutBoundOrderCancellation},
          {path:'confirm',component:OutBoundOrderConfirm},

        ]},
    {'path':'outBoundOrderAdd',
      component:OutBoundOrderAdd
    }
  ]},
  //调拨业务
  {path:'/allocation',component:AllocationList,name:"allocation",
    children:[
      {'path':'detail/:id',
        component:AllocationDetail,
        children:[
          {path:'info',component:AllocationInfo},
          {path:'examine',component:AllocationToExamine},
          {path:'print',component:AllocationToPrint},
          {path:'cancellation',component:AllocationCancellation},
        ]},
      {"path":"allocationAdd",component:AllocationAdd}
    ]},
  //盘点业务
  {path:'/stockTacking',component:StockTackingList,name:"stockTacking",
    children:[
      {'path':'detail/:id',
        component:StockTackingDetail,
        children:[
          {path:'info',component:StockTackingInfo},
          {path:'verify',component:StockTackingVerify},
          {path:'examine',component:StockTackingToExamine},
          {path:'inventoryProfit',component:StockTackingInventoryProfit},
          {path:'inventoryLosses',component:StockTackingInventoryLosses},

        ]},
      {"path":"stockTackingAdd",component:StockTackingAdd}
    ]},
  //报损业务
  {path:'/reportedLoss',component:ReportedLossList,name:"reportedLoss",
    children:[
      {'path':'detail/:id',
        component:ReportedLossDetail,
        children:[
          {path:'info',component:ReportedLossInfo},
          {path:'examine',component:ReportedLossToExamine},

        ]},
      {"path":"reportedLossAdd",component:ReportedLossAdd}
    ]},
  //预警管理
  {path:'/warningManage',component:WarningManageList,name:"warningManage"},
  //数据管理
  {
    path:'/dataManagement',component:DMContainer,name:"DMContainer",redirect:"/dataManagement/store",
    children:[
      {path:'store',component:Store,name:'store',
      children:[
        {path:'detail',component:StoreDetails,name:'storeDetails',
          children:[
            {path:'store/:id',component:StoreDetail,name:'storeDetail',
            children:[
            {path:'info',component:StoreInfo,name:'storeInfo'},
            {path:'edit',component:StoreEdit,name:'storeEdit'}
            ]
            },
            {path:'storeAdd',component:StoreEdit,name:'storeAdd'},
            {path:'area/:id',component:AreaDetail,name:'areaDetail',
            children:[
            {path:'info',component:AreaInfo,name:'areaInfo'},
            {path:'edit',component:AreaEdit,name:'areaEdit'}
            ]
            },
            {path:'areaAdd',component:AreaEdit,name:'areaAdd'},
            {path:'container/:id',component:ConDetail,name:'conDetail',
            children:[
            {path:'info',component:ConInfo,name:'areaInfo'},
            {path:'edit',component:ConEdit,name:'areaEdit'}
            ]
            },
            {path:'conAdd',component:ConEdit,name:'conAdd'},
             {path:'location/:id',component:LocDetail,name:'locDetail',
            children:[
            {path:'info',component:LocInfo,name:'locInfo'},
            {path:'edit',component:LocEdit,name:'locEdit'}
            ]
            },
            {path:'locAdd',component:LocEdit,name:'locAdd'},
          ]
        }
      ]
      },
      {path:'supplier',component:Supplier,name:'supplier',
        children:[
        {path:'detail/:id',component:SupplierDetail,name:'supplierDetail',
        children:[
        {path:'info',component:SupplierInfo,name:'supplierInfo'},
        {path:'edit',component:SupplierEdit,name:'supplierEdit'}
        ]
        },
        {path:'add',component:SupplierEdit,name:'supplierAdd'}
        ]
      },
      {path:'config',component:Config,name:'config', redirect:"/dataManagement/config/list",
      children:[
        {path:'list',component:ConfigList,name:'configList'},
        {path:'add',component:ConfigEdit,name:'configAdd'},
        {path:'edit/:id',component:ConfigEdit,name:'configEdit'}
      ]
      },
      {path:'field',component:Field,name:'field'},
    ]
  }
]
