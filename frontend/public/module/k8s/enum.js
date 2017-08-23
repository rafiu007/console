export const k8sEnum = {
  Kind: {
    Service: {
      // singular label
      label: 'Service',
      // api path to resource
      path: 'services',
      //Used in resource-list.jsx to return the matching object
      plural: 'services',
      abbr: 'S',
    },
    Pod: {
      label: 'Pod',
      path: 'pods',
      plural: 'pods',
      abbr: 'P',
    },
    Container: {
      label: 'Container',
      path: 'containers',
      plural: 'containers',
      abbr: 'C',
    },
    DaemonSet: {
      label: 'Daemon Set',
      path: 'daemonsets',
      plural: 'daemonsets',
      isExtension: true,
      apiVersion: 'v1beta1',
      abbr: 'DS',
    },
    ReplicationController: {
      label: 'Replication Controller',
      path: 'replicationcontrollers',
      plural: 'replicationcontrollers',
      abbr: 'RC',
    },
    HorizontalPodAutoscaler: {
      label: 'Horizontal Pod Autoscaler',
      path: 'horizontalpodautoscalers',
      plural: 'horizontalpodautoscalers',
      apiVersion: 'autoscaling/v1',
      basePath: '/apis/',
      abbr: 'HPA',
    },
    ServiceAccount: {
      label: 'Service Account',
      path: 'serviceaccounts',
      plural: 'serviceaccounts',
      abbr: 'SA',
    },
    ReplicaSet: {
      label: 'Replica Set',
      isExtension: true,
      apiVersion: 'v1beta1',
      path: 'replicasets',
      plural: 'replicasets',
      abbr: 'RS',
    },
    Deployment: {
      label: 'Deployment',
      isExtension: true,
      apiVersion: 'v1beta1',
      path: 'deployments',
      plural: 'deployments',
      abbr: 'D',
    },
    Job: {
      label: 'Job',
      apiVersion: 'batch/v1',
      path: 'jobs',
      basePath: '/apis/',
      plural: 'jobs',
      abbr: 'J',
    },
    Node: {
      label: 'Node',
      path: 'nodes',
      plural: 'nodes',
      abbr: 'N',
    },
    Event: {
      label: 'Event',
      path: 'events',
      plural: 'events',
      abbr: 'E',
    },
    ComponentStatus: {
      label: 'Component Status',
      labelPlural: 'Component Statuses',
      path: 'componentstatuses',
      plural: 'componentstatuses',
      abbr: 'CS',
    },
    Namespace: {
      label: 'Namespace',
      path: 'namespaces',
      plural: 'namespaces',
      abbr: 'N',
    },
    Ingress: {
      label: 'Ingress',
      labelPlural: 'Ingresses',
      isExtension: true,
      apiVersion: 'v1beta1',
      path: 'ingresses',
      plural: 'ingresses',
      abbr: 'I',
    },
    ConfigMap: {
      label: 'Config Map',
      path: 'configmaps',
      plural: 'configmaps',
      abbr: 'CM',
    },
    Secret: {
      label: 'Secret',
      path: 'secrets',
      plural: 'secrets',
      abbr: 'S',
    },
    ClusterRoleBinding: {
      label: 'Cluster Role Binding',
      basePath: '/apis/rbac.authorization.k8s.io/',
      apiVersion: 'v1beta1',
      path: 'clusterrolebindings',
      plural: 'clusterrolebindings',
      abbr: 'CRB',
    },
    ClusterRole: {
      label: 'Cluster Role',
      basePath: '/apis/rbac.authorization.k8s.io/',
      apiVersion: 'v1beta1',
      path: 'clusterroles',
      plural: 'clusterroles',
      abbr: 'CR'
    },
    RoleBinding: {
      label: 'Role Binding',
      basePath: '/apis/rbac.authorization.k8s.io/',
      apiVersion: 'v1beta1',
      path: 'rolebindings',
      plural: 'rolebindings',
      abbr: 'RB',
    },
    Role: {
      label: 'Role',
      basePath: '/apis/rbac.authorization.k8s.io/',
      apiVersion: 'v1beta1',
      path: 'roles',
      plural: 'roles',
      abbr: 'R',
    },
    TectonicVersion: {
      label: 'Tectonic Version',
      basePath: '/apis/tco.coreos.com/',
      apiVersion: 'v1',
      path: 'tectonicversions',
      plural: 'tectonicversions',
      abbr: 'TV',
    },
    ChannelOperatorConfig: {
      label: 'Channel Operator Config',
      basePath: '/apis/tco.coreos.com/',
      apiVersion: 'v1',
      path: 'channeloperatorconfigs',
      plural: 'channeloperatorconfigs',
      abbr: 'COC',
    },
    AppVersion: {
      label: 'AppVersion',
      basePath: '/apis/tco.coreos.com/',
      apiVersion: 'v1',
      path: 'appversions',
      plural: 'appversions',
      abbr: 'AV',
    },
    Petset: {
      label: 'Petset',
      plural: 'petsets',
      abbr: 'PS',
    },
    StatefulSet: {
      label: 'StatefulSet',
      plural: 'statefulsets',
      abbr: 'SS',
    },
    EtcdCluster: {
      label: 'etcd Cluster',
      apiVersion: 'v1beta1',
      basePath: '/apis/etcd.coreos.com/',
      path: 'clusters',
      plural: 'etcdclusters',
      abbr: 'EC',
    },
    NetworkPolicy: {
      label: 'Network Policy',
      labelPlural: 'Network Policies',
      apiVersion: 'v1',
      basePath: '/apis/networking.k8s.io/',
      path: 'networkpolicies',
      plural: 'networkpolicies',
      abbr: 'NP',
    },
    Prometheus: {
      label: 'Prometheus',
      labelPlural: 'Prometheus Instances',
      apiVersion: 'v1alpha1',
      basePath: '/apis/monitoring.coreos.com/',
      path: 'prometheuses',
      plural: 'prometheuses',
      abbr: 'PI',
    },
    ServiceMonitor: {
      label: 'Service Monitor',
      labelPlural: 'Service Monitors',
      apiVersion: 'v1alpha1',
      basePath: '/apis/monitoring.coreos.com/',
      path: 'servicemonitors',
      plural: 'servicemonitors',
      abbr: 'SM',
    },
    Alertmanager: {
      label: 'Alert Manager',
      labelPlural: 'Alert Managers',
      apiVersion: 'v1alpha1',
      basePath: '/apis/monitoring.coreos.com/',
      path: 'alertmanagers',
      plural: 'alertmanagers',
      abbr: 'AM',
    },
    'PodVuln': {
      label: 'Pod Vuln',
      labelPlural: 'Pod Vulns',
      path: 'podvulns',
      plural: 'podvulns',
      abbr: 'V',
    },
    '*': {
      id: 'all',
      plural: 'all',
      labelPlural: 'All',
      abbr: '*',
    }
  },
};

export const idToEnum = {};
_.each(k8sEnum.Kind, v => idToEnum[v.id] = v);

// Shortcut because this is used so often
export const k8sKinds = k8sEnum.Kind;

_.each(k8sEnum.Kind, (v, k) => {
  v.kind = v.kind || k;
  v.id = v.id || k.toLowerCase();
  v.labelPlural = v.labelPlural || `${v.label}s`;
});
