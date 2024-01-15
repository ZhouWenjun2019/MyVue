(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{418:function(s,a,t){"use strict";t.r(a);var e=t(10),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"已知条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#已知条件"}},[s._v("#")]),s._v(" 已知条件")]),s._v(" "),t("h3",{attrs:{id:"数据集处理流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据集处理流程"}},[s._v("#")]),s._v(" 数据集处理流程")]),s._v(" "),t("ol",[t("li",[s._v("联合SRE16之前的所有SRE系列数据和Mixer 6，放入data/sre")]),s._v(" "),t("li",[s._v("准备SWBD数据集，放入data/swbd")]),s._v(" "),t("li",[s._v("整理出注册数据data/sre16_eval_enroll，验证数据data/sre16_eval_test，"),t("strong",[s._v("无标签的")]),s._v("广东话和菲律宾语集合data/sre16_major")]),s._v(" "),t("li",[s._v("将SRE和SWBD数据集联合，放入data/swbd_sre")]),s._v(" "),t("li",[s._v("加混响data/swbd_sre_noise，加噪data/swbd_sre_noise，加音乐data/swbd_sre_music，加语音swbd_sre_babble")]),s._v(" "),t("li",[s._v("将语音增强数据集合data/swbd_sre_aug，取子集swbd_sre_aug_128k")]),s._v(" "),t("li",[s._v("结合增强数据与原始数据data/swbd_sre_combined")]),s._v(" "),t("li",[s._v("分离出SRE系列数据data/sre_combined")]),s._v(" "),t("li",[s._v("去除静音后用于训练网络data/swbd_sre_combined_no_sil")])]),s._v(" "),t("h3",{attrs:{id:"各xvector集作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#各xvector集作用"}},[s._v("#")]),s._v(" 各Xvector集作用")]),s._v(" "),t("p",[s._v("根据"),t("code",[s._v("sre16/0003_sre16_v2_1a/run.sh")]),s._v("脚本，在stage=7时，分别提取了如下Xvector：")]),s._v(" "),t("ul",[t("li",[s._v("exp/xvectors_sre16_major：（域内）data/sre16_major，用于中心化，白化和得分归一化（但该脚本目前还没有得分归一化）；自适应PLDA")]),s._v(" "),t("li",[s._v("exp/xvectors_sre_combined：（域外）data/sre_combined，用于LDA/PLDA")]),s._v(" "),t("li",[s._v("exp/xvectors_sre16_eval_test：测试Ivector，与注册Ivector的spk应一致，但utt不可重叠")]),s._v(" "),t("li",[s._v("exp/xvectors_sre16_eval_enroll：注册Ivector")])]),s._v(" "),t("p",[s._v("⚠️问题：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("为什么LDA/PLDA，及中心化，白化和得分归一化不能用同一个数据集？")]),s._v(" "),t("p",[s._v("可以，但是为了说明域适应的优越性和域适应原理，本脚本分开处理")])]),s._v(" "),t("li",[t("p",[s._v("所谓域内数据是不是测试集？")]),s._v(" "),t("p",[s._v("不是，在实际应用中，域内数据是测试集的特征表示，通过无标签的域内数据我们可以使测试结果更加准确")])])]),s._v(" "),t("h2",{attrs:{id:"主要步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要步骤"}},[s._v("#")]),s._v(" 主要步骤")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$train_cmd")]),s._v(" exp/scores/log/sre16_eval_scoring.log "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n   ivector-plda-scoring --normalize-length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --num-utts"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ark:exp/xvectors_sre16_eval_enroll/num_utts.ark "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ivector-copy-plda --smoothing=0.0 exp/xvectors_sre_combined/plda - |"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ark:ivector-mean ark:data/sre16_eval_enroll/spk2utt scp:exp/xvectors_sre16_eval_enroll/xvector.scp ark:- | ivector-subtract-global-mean exp/xvectors_sre16_major/mean.vec ark:- ark:- | transform-vec exp/xvectors_sre_combined/transform.mat ark:- ark:- | ivector-normalize-length ark:- ark:- |"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ark:ivector-subtract-global-mean exp/xvectors_sre16_major/mean.vec scp:exp/xvectors_sre16_eval_test/xvector.scp ark:- | transform-vec exp/xvectors_sre_combined/transform.mat ark:- ark:- | ivector-normalize-length ark:- ark:- |"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"cat '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sre16_trials")]),s._v("' | cut -d\\  --fields=1,2 |\"")]),s._v(" exp/scores/sre16_eval_scores "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("⚠️使用的是域外数据训练得到的PLDA模型，"),t("code",[s._v("--smoothing=0.0")]),s._v("，为什么不直接用plda呢？可能是为了程序的规范化")])]),s._v(" "),t("li",[t("p",[s._v("⚠️后续该脚本用此域外PLDA模型进行自适应得到域内PLDA，但此时域内PLDA是没有自己的LDA投影矩阵的，依旧使用域外LDA矩阵")])]),s._v(" "),t("li",[t("p",[s._v("为什么不直接用域内数据训练LDA和PLDA呢？")]),s._v(" "),t("p",[s._v("因为域内数据通常是小样本的，直接训练无法得到准确的模型参数")])]),s._v(" "),t("li",[t("p",[s._v("需要自行准备"),t("code",[s._v("exp/xvectors_sre16_eval_enroll/xvector.scp")]),s._v("、"),t("code",[s._v("exp/xvectors_enroll/num_utts.ark")]),s._v("、"),t("code",[s._v("exp/xvectors_sre16_eval_test/xvector.scp")]),s._v("、"),t("code",[s._v("sre16_trials")])])])]),s._v(" "),t("blockquote",[t("p",[s._v("根据数据集的命名，enroll+test=eval，现在我们对数据集重新进行约定，test=enroll+eval，先对数据进行处理，再划分为注册集和验证集。使用TIMIT数据集，共630人。")])]),s._v(" "),t("h3",{attrs:{id:"表单准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表单准备"}},[s._v("#")]),s._v(" 表单准备")]),s._v(" "),t("p",[s._v("仿照"),t("code",[s._v("aishell_data_prep.sh")]),s._v("生成"),t("code",[s._v("spk2utt")]),s._v("、"),t("code",[s._v("utt2spk")]),s._v("、"),t("code",[s._v("wav.scp")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$audio_dir")]),s._v(" -iname "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.wav"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wav/test"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/wav.flist "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Preparing "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v(" transcriptions\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\.wav//'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/wav.flist "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NF")]),s._v("}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/utt.list\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\.wav//'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/wav.flist "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{i=NF-1;printf(\"%s %s"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('",'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NF")]),s._v(","),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(")}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/utt2spk_all\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("paste")]),s._v(" -d"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/utt.list "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/wav.flist "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/wav.scp_all\nutils/filter_scp.pl -f "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/utt.list "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/utt2spk_all "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -u "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/utt2spk\nutils/filter_scp.pl -f "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/utt.list "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/wav.scp_all "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -u "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/wav.scp\nutils/utt2spk_to_spk2utt.pl "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/utt2spk "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/spk2utt\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p data/test\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("f")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" spk2utt utt2spk wav.scp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test_dir")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$f")]),s._v(" data/test/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$f")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"提取test集特征"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提取test集特征"}},[s._v("#")]),s._v(" 提取Test集特征")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("steps/make_mfcc.sh --mfcc-config conf/mfcc.conf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --nj "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" --cmd "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$train_cmd")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  data/test exp/make_mfcc "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mfccdir")]),s._v("\nutils/fix_data_dir.sh data/test\nsid/compute_vad_decision.sh --nj "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" --cmd "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$train_cmd")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  data/test exp/make_vad "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vaddir")]),s._v("\nutils/fix_data_dir.sh data/test\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("TIMIT采样率是16k，但是预训练模型中给出采样率为8k，因此根据log文件提示，设置"),t("code",[s._v("--allow-downsample=true")])])]),s._v(" "),t("h3",{attrs:{id:"划分注册和验证集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#划分注册和验证集"}},[s._v("#")]),s._v(" 划分注册和验证集")]),s._v(" "),t("p",[s._v("参考aishell脚本中的"),t("code",[s._v("local/split_data_enroll_eval.py")]),s._v("，每人取3句话用于注册，1句话用于测试：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("split_enroll_eval"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("utt2spk data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("enroll"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("utt2spk data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("eval")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("utt2spk "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"提取xvector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提取xvector"}},[s._v("#")]),s._v(" 提取Xvector")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("sid/nnet3/xvector/extract_xvectors.sh --cmd "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$train_cmd")]),s._v('"')]),s._v(" --nj "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nj")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nnet_dir")]),s._v(" data/test/enroll exp/xvectors_enroll\n\nsid/nnet3/xvector/extract_xvectors.sh --cmd "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$train_cmd")]),s._v('"')]),s._v(" --nj "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nj")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nnet_dir")]),s._v(" data/test/eval exp/xvectors_eval\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("只会使用到CPU，还是很快的")]),s._v(" "),t("li",[t("code",[s._v("extract_xvectors.sh")]),s._v("会生成"),t("code",[s._v("num_utts.ark")])])]),s._v(" "),t("h3",{attrs:{id:"trials文件准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trials文件准备"}},[s._v("#")]),s._v(" trials文件准备")]),s._v(" "),t("p",[s._v("直接使用aishell脚本中的"),t("code",[s._v("local/produce_trials.py")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("trials")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("data/test/speaker_ver.lst\nlocal/produce_trials.py data/test/eval/utt2spk "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$trials")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"打分-eer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打分-eer"}},[s._v("#")]),s._v(" 打分&EER")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$train_cmd")]),s._v(" exp/scores/log/scoring.log "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n   ivector-plda-scoring --normalize-length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --num-utts"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ark:exp/xvectors_enroll/num_utts.ark "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ivector-copy-plda --smoothing=0.0 exp/xvectors_sre_combined/plda - |"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ark:ivector-mean ark:data/test/enroll/spk2utt scp:exp/xvectors_enroll/xvector.scp ark:- | ivector-subtract-global-mean exp/xvectors_sre16_major/mean.vec ark:- ark:- | transform-vec exp/xvectors_sre_combined/transform.mat ark:- ark:- | ivector-normalize-length ark:- ark:- |"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ark:ivector-subtract-global-mean exp/xvectors_sre16_major/mean.vec scp:exp/xvectors_eval/xvector.scp ark:- | transform-vec exp/xvectors_sre_combined/transform.mat ark:- ark:- | ivector-normalize-length ark:- ark:- |"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"cat '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$trials")]),s._v("' | awk '{print "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\\"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\\"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("}' |\"")]),s._v(" exp/scores/eval_scores "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("eer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("paste")]),s._v(" $trials exp/scores/eval_scores "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$6")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" compute-eer - "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Using Out-of-Domain PLDA, EER: '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${eer}")]),s._v('%"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ul",[t("li",[s._v("注意格式，必须先是注册spk，再是测试utt，且trials文件的第1,2列也需要对应")]),s._v(" "),t("li",[s._v("结果：Equal error rate is 5.71429%, at threshold -22.9097 5.714")])]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("h3",{attrs:{id:"transform-feats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transform-feats"}},[s._v("#")]),s._v(" transform-feats")]),s._v(" "),t("p",[s._v("应用变化（e.g. LDA; HLDA; fMLLR/CMLLR; MLLT/STC）。当transform-num-cols == feature-dim时，为线性变换，当transform-num-cols == feature-dim+1 (->append 1.0 to features)时，为仿射变换。默认作用于每个utt，当utt2spk文件提供时，可作用于每个spk。若提供了transform-rxfilename，则作用于全局。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Usage: transform-feats [options] (<transform-rspecifier>|<transform-rxfilename>) <feats-rspecifier> <feats-wspecifier>\nSee also: transform-vec, copy-feats, compose-transforms\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"utils-filter-scp-pl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#utils-filter-scp-pl"}},[s._v("#")]),s._v(" utils/filter_scp.pl")]),s._v(" "),t("p",[s._v("从输入文件中挑选出其第f列（默认第一列）在id_list中的行。注意：只关心id_list的第一列，--exclude则挑选出不在id_list中的行。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Usage: filter_scp.pl [--exclude] [-f <field-to-filter-on>] id_list [in.scp] > out.scp \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://ld246.com/article/1488765818607",target:"_blank",rel:"noopener noreferrer"}},[s._v("'\\r': command not found 解决办法"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#转化为unix格式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v("$//'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);