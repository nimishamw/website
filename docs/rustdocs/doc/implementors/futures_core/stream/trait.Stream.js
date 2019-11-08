(function() {var implementors = {};
implementors["channel"] = [{text:"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, M&gt; <a class=\"trait\" href=\"https://rust-lang-nursery.github.io/futures-api-docs/0.3.0-alpha.19/futures_core/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"channel/libra_channel/struct.Receiver.html\" title=\"struct channel::libra_channel::Receiver\">Receiver</a>&lt;K, M&gt;",synthetic:false,types:["channel::libra_channel::Receiver"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://rust-lang-nursery.github.io/futures-api-docs/0.3.0-alpha.19/futures_core/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"channel/struct.Receiver.html\" title=\"struct channel::Receiver\">Receiver</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>",synthetic:false,types:["channel::Receiver"]},];
implementors["memsocket"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://rust-lang-nursery.github.io/futures-api-docs/0.3.0-alpha.19/futures_core/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"memsocket/struct.Incoming.html\" title=\"struct memsocket::Incoming\">Incoming</a>&lt;'a&gt;",synthetic:false,types:["memsocket::Incoming"]},];
implementors["netcore"] = [{text:"impl&lt;TSocket&gt; <a class=\"trait\" href=\"https://rust-lang-nursery.github.io/futures-api-docs/0.3.0-alpha.19/futures_core/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"netcore/multiplexing/yamux/struct.Listener.html\" title=\"struct netcore::multiplexing::yamux::Listener\">Listener</a>&lt;TSocket&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TSocket: <a class=\"trait\" href=\"https://rust-lang-nursery.github.io/futures-api-docs/0.3.0-alpha.19/futures_io/futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://rust-lang-nursery.github.io/futures-api-docs/0.3.0-alpha.19/futures_io/futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>",synthetic:false,types:["netcore::multiplexing::yamux::Listener"]},{text:"impl&lt;St, Fut1, O1, Fut2, O2, E, F&gt; <a class=\"trait\" href=\"https://rust-lang-nursery.github.io/futures-api-docs/0.3.0-alpha.19/futures_core/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"netcore/transport/and_then/struct.AndThenStream.html\" title=\"struct netcore::transport::and_then::AndThenStream\">AndThenStream</a>&lt;St, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"https://rust-lang-nursery.github.io/futures-api-docs/0.3.0-alpha.19/futures_core/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>Fut1, Multiaddr<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, E&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;O1, E&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;O2, E&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(O1, <a class=\"enum\" href=\"netcore/transport/enum.ConnectionOrigin.html\" title=\"enum netcore::transport::ConnectionOrigin\">ConnectionOrigin</a>) -&gt; Fut2 + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>,&nbsp;</span>",synthetic:false,types:["netcore::transport::and_then::AndThenStream"]},{text:"impl <a class=\"trait\" href=\"https://rust-lang-nursery.github.io/futures-api-docs/0.3.0-alpha.19/futures_core/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"netcore/transport/memory/struct.Listener.html\" title=\"struct netcore::transport::memory::Listener\">Listener</a>",synthetic:false,types:["netcore::transport::memory::Listener"]},{text:"impl <a class=\"trait\" href=\"https://rust-lang-nursery.github.io/futures-api-docs/0.3.0-alpha.19/futures_core/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"netcore/transport/tcp/struct.TcpListenerStream.html\" title=\"struct netcore::transport::tcp::TcpListenerStream\">TcpListenerStream</a>",synthetic:false,types:["netcore::transport::tcp::TcpListenerStream"]},{text:"impl&lt;St, Fut, O, E&gt; <a class=\"trait\" href=\"https://rust-lang-nursery.github.io/futures-api-docs/0.3.0-alpha.19/futures_core/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"netcore/transport/timeout/struct.TimeoutStream.html\" title=\"struct netcore::transport::timeout::TimeoutStream\">TimeoutStream</a>&lt;St&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"https://rust-lang-nursery.github.io/futures-api-docs/0.3.0-alpha.19/futures_core/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>Fut, Multiaddr<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, E&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;O, E&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>,&nbsp;</span>",synthetic:false,types:["netcore::transport::timeout::TimeoutStream"]},];
implementors["network"] = [{text:"impl&lt;TMessage:&nbsp;<a class=\"trait\" href=\"https://docs.rs/prost/0.5.0/prost/message/trait.Message.html\" title=\"trait prost::message::Message\">Message</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://rust-lang-nursery.github.io/futures-api-docs/0.3.0-alpha.19/futures_core/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"network/validator_network/struct.NetworkEvents.html\" title=\"struct network::validator_network::NetworkEvents\">NetworkEvents</a>&lt;TMessage&gt;",synthetic:false,types:["network::validator_network::NetworkEvents"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()