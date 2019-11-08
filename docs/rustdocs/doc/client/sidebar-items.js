initSidebarItems({"constant":[["ED25519_PRIVATE_KEY_LENGTH","The length of the Ed25519PrivateKey"],["ED25519_PUBLIC_KEY_LENGTH","The length of the Ed25519PublicKey"],["ED25519_SIGNATURE_LENGTH","The length of the Ed25519Signature"]],"enum":[["AccountStatus","Enum used to represent account status."],["TransactionArgument",""],["TransactionPayload",""]],"mod":[["client_proxy","Main instance of client holding corresponding information, e.g. account address."],["commands","Command struct to interact with client."],["compat","Those transitory traits are meant to help with the progressive migration of the code base to the crypto module and will disappear after"]],"struct":[["AccountAddress","A struct that represents an account address. Currently Public Key is used."],["AccountData","Struct used to store data for each created account.  We track the sequence number so we can create new transactions easily"],["Ed25519PrivateKey","An Ed25519 private key"],["Ed25519PublicKey","An Ed25519 public key"],["Ed25519Signature","An Ed25519 signature"],["KeyPair","A keypair consisting of a private and public key"],["RawTransaction","RawTransaction is the portion of a transaction that a client signs"]],"trait":[["CryptoHash","A type that implements `CryptoHash` can be hashed by a cryptographic hash function and produce a `HashValue`. Each type needs to have its own `Hasher` type."],["ValidKeyStringExt","An extension to to/from Strings for [`ValidKey`][ValidKey]."]]});