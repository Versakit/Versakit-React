try {
	(() => {
		var Y = __STORYBOOK_API__,
			{
				ActiveTabs: U,
				Consumer: $,
				ManagerContext: w,
				Provider: V,
				addons: i,
				combineParameters: z,
				controlOrMetaKey: j,
				controlOrMetaSymbol: q,
				eventMatchesShortcut: Z,
				eventToShortcut: J,
				isMacLike: Q,
				isShortcutTaken: X,
				keyToSymbol: ee,
				merge: te,
				mockChannel: oe,
				optionOrAltSymbol: re,
				shortcutMatchesShortcut: ae,
				shortcutToHumanString: ne,
				types: S,
				useAddonState: E,
				useArgTypes: se,
				useArgs: le,
				useChannel: d,
				useGlobalTypes: ie,
				useGlobals: h,
				useParameter: O,
				useSharedState: ce,
				useStoryPrepared: me,
				useStorybookApi: ue,
				useStorybookState: pe,
			} = __STORYBOOK_API__;
		var e = __REACT__,
			{
				Children: de,
				Component: he,
				Fragment: y,
				Profiler: Oe,
				PureComponent: ye,
				StrictMode: be,
				Suspense: Re,
				__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ce,
				cloneElement: ge,
				createContext: fe,
				createElement: Ae,
				createFactory: Ie,
				createRef: Le,
				forwardRef: ke,
				isValidElement: Me,
				lazy: Pe,
				memo: He,
				useCallback: ve,
				useContext: Be,
				useDebugValue: De,
				useEffect: Ne,
				useImperativeHandle: xe,
				useLayoutEffect: Fe,
				useMemo: b,
				useReducer: Ge,
				useRef: Ke,
				useState: We,
				version: Ye,
			} = __REACT__;
		var ze = __STORYBOOK_THEMING__,
			{
				CacheProvider: je,
				ClassNames: qe,
				Global: Ze,
				ThemeProvider: Je,
				background: Qe,
				color: Xe,
				convert: et,
				create: tt,
				createCache: ot,
				createGlobal: rt,
				createReset: at,
				css: nt,
				darken: st,
				ensure: lt,
				ignoreSsrWarning: it,
				isPropValid: ct,
				jsx: mt,
				keyframes: ut,
				lighten: pt,
				styled: R,
				themes: Tt,
				typography: _t,
				useTheme: St,
				withTheme: Et,
			} = __STORYBOOK_THEMING__;
		var bt = __STORYBOOK_COMPONENTS__,
			{
				A: Rt,
				ActionBar: Ct,
				AddonPanel: gt,
				Badge: ft,
				Bar: At,
				Blockquote: It,
				Button: Lt,
				ClipboardCode: kt,
				Code: Mt,
				DL: Pt,
				Div: Ht,
				DocumentWrapper: vt,
				ErrorFormatter: Bt,
				FlexBar: Dt,
				Form: Nt,
				H1: xt,
				H2: Ft,
				H3: Gt,
				H4: Kt,
				H5: Wt,
				H6: Yt,
				HR: Ut,
				IconButton: C,
				IconButtonSkeleton: $t,
				Icons: g,
				Img: wt,
				LI: Vt,
				Link: zt,
				ListItem: jt,
				Loader: qt,
				OL: Zt,
				P: Jt,
				Placeholder: Qt,
				Pre: Xt,
				ResetWrapper: eo,
				ScrollArea: to,
				Separator: oo,
				Spaced: ro,
				Span: ao,
				StorybookIcon: no,
				StorybookLogo: so,
				Symbols: lo,
				SyntaxHighlighter: io,
				TT: co,
				TabBar: mo,
				TabButton: uo,
				TabWrapper: po,
				Table: To,
				Tabs: _o,
				TabsState: So,
				TooltipLinkList: f,
				TooltipMessage: Eo,
				TooltipNote: ho,
				UL: Oo,
				WithTooltip: A,
				WithTooltipPure: yo,
				Zoom: bo,
				codeCommon: Ro,
				components: Co,
				createCopyToClipboardFunction: go,
				getStoryHref: fo,
				icons: Ao,
				interleaveSeparators: Io,
				nameSpaceClassNames: Lo,
				resetComponents: ko,
				withReset: Mo,
			} = __STORYBOOK_COMPONENTS__;
		var m = "themes",
			u = `storybook/${m}}`,
			c = `${u}/theme-switcher`,
			M = { themesList: [], themeDefault: void 0 },
			P = {},
			H = { REGISTER_THEMES: `${u}/REGISTER_THEMES` },
			v = R.div(({ theme: t }) => ({ fontSize: t.typography.size.s2 - 1, marginLeft: 10 })),
			B = (t) => t.length > 1,
			D = () => {
				const { themeOverride: t } = O(m, P),
					[{ theme: l }, I] = h(),
					[{ themesList: p, themeDefault: T }, L] = E(c, M);
				d({
					[H.REGISTER_THEMES]: ({ themes: o, defaultTheme: r }) => {
						L((k) => ({ ...k, themesList: o, themeDefault: r }));
					},
				});
				const _ = b(() => {
					if (t) return e.createElement(e.Fragment, null, "Story override");
					const o = l || T;
					return o && e.createElement(e.Fragment, null, `${o} theme`);
				}, [t, T, l]);
				return B(p)
					? e.createElement(
							y,
							null,
							e.createElement(
								A,
								{
									placement: "top",
									trigger: "click",
									closeOnClick: !0,
									tooltip: ({ onHide: o }) =>
										e.createElement(f, {
											links: p.map((r) => ({
												id: r,
												title: r,
												active: l === r,
												onClick: () => {
													I({ theme: r }), o();
												},
											})),
										}),
								},
								e.createElement(
									C,
									{ key: c, active: !t, title: "Theme" },
									e.createElement(g, { icon: "paintbrush" }),
									_ && e.createElement(v, null, _),
								),
							),
						)
					: null;
			};
		i.register(u, () => {
			i.add(c, {
				title: "Themes",
				type: S.TOOL,
				match: ({ viewMode: t }) => !!(t && t.match(/^(story|docs)$/)),
				render: D,
				paramKey: m,
			});
		});
	})();
} catch (e) {
	console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e);
}
