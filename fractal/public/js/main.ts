import HelloWorld from '../../components/01_atoms/hello-world/hello-world';
import Cursor from '../../components/01_atoms/cursor/cursor';
import { createUnparsedSourceFile } from 'typescript';

const helloWorld = new HelloWorld('Hello', 'World');
helloWorld.init();

const cursor = new Cursor();
cursor.init();