initSidebarItems({"enum":[["Error","Different reasons for proposal rejection"]],"struct":[["ConsensusState","The state required to guarantee safety of the protocol. We need to specify the specific state to be persisted for the recovery of the protocol. (e.g., last vote round and preferred block round)."],["SafetyRules","SafetyRules is responsible for two things that are critical for the safety of the consensus: 1) voting rules, 2) commit rules. SafetyRules is NOT THREAD SAFE (should be protected outside via e.g., RwLock). The commit decisions are returned to the caller as result of learning about a new QuorumCert."]]});