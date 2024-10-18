import { assertEquals } from "STD/assert/equals";
import { isStringSingleLine } from "./mod.ts";
Deno.test("False 1", { permissions: "none" }, () => {
	assertEquals(isStringSingleLine(`Wisi sed et at vero eos nostrud volutpat sed stet dignissim sit sanctus in eros.
Et laoreet odio sanctus ea.
Sea in dolores diam tincidunt labore sea stet vero dolor ut est.
At aliquyam diam facilisis lorem et takimata et volutpat eros erat ipsum velit labore sed ea illum.
Dolor lorem sed et volutpat exerci gubergren gubergren tempor quis ea eirmod eos ut dolor autem ipsum accumsan.`), false);
});
Deno.test("True 1", { permissions: "none" }, () => {
	assertEquals(isStringSingleLine("Hello, world!"), true);
});
