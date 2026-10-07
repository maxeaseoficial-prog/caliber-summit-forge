<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the TanStack Start project configuration, routes, and shared components intact when updating page content; the publishing pipeline depends on the complete source tree.
- Serve large uploaded photos through imported asset JSON pointers rather than repository binaries; this preserves image quality without exceeding the publishing file limit.
